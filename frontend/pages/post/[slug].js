import groq from 'groq'
import imageUrlBuilder from '@sanity/image-url'
import { PortableText } from '@portabletext/react'
import client from '../../client'
import CodeBlock from '../../components/CodeBlock'
import SubscribeButton from '../../components/SubscribeButton'
import PostMetadata from '../../components/PostMetadata'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          className="full-width-image"
          src={urlFor(value).fit('max').auto('format')}
        />
      )
    },
    code: CodeBlock,
    subscribeButton: ({ value }) => {
      return <SubscribeButton label={value.label} />
    },
  }
}

const Post = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>
  }

  const {
    title = 'Missing title',
    name = 'Missing name',
    categories,
    authorImage,
    authorSlug = 'unknown-author',
    body = []
  } = post

  return (
    <article>
      <h1>{title}</h1>
      <span>By {name}</span>
      {categories && (
        <p className="categories">
          Posted in {categories.map(category => <span key={category}>{category}</span>)}
        </p>
      )}
      {authorImage && (
        <div>
          <img
            src={urlFor(authorImage)
              .width(50)
              .url()}
            alt={`${name}'s picture`}
          />
        </div>
      )}
      <PortableText
        value={body}
        components={ptComponents}
      />
      <PostMetadata authorSlug={authorSlug} categories={categories} />
    </article>
  )
}

const query = groq`*[_type == "post" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "authorSlug": author->slug.current,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  )

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params
  const post = await client.fetch(query, { slug })
  return {
    props: {
      post
    },
    revalidate: 60, // Revalidate at most once per minute
  }
}

export default Post