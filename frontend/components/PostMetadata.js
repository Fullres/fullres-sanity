import { useEffect } from 'react';
import { addMetadata } from 'fullres-nextjs';

const PostMetadata = ({ authorSlug, categories }) => {
  useEffect(() => {
    addMetadata({
      postAuthor: authorSlug,
      postCategory: categories
    });
  }, [authorSlug, categories]);

  return null;
};

export default PostMetadata;