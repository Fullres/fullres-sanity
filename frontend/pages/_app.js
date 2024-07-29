import { FullRes } from 'fullres-nextjs'
import '../public/styles.css'
import Layout from '../components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        {/* Use the environment variable for the fullres site key. You can also hard code your site key if you would like. */}
      	<FullRes siteKey={process.env.NEXT_PUBLIC_FULLRES_SITEKEY} />
      	<Component {...pageProps} />
      </Layout>
    </>
  )
}
