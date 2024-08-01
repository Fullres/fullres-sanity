import { FullresTag } from 'fullres-nextjs';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <FullresTag siteKey={process.env.NEXT_PUBLIC_FULLRES_SITEKEY} proxy={process.env.NEXT_PUBLIC_FULLRES_PROXY} />
      <Component {...pageProps} />
    </Layout>
  );
}
