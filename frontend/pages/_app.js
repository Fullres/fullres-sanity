import { FullresProvider } from 'fullres-nextjs';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <FullresProvider siteKey={process.env.NEXT_PUBLIC_FULLRES_SITEKEY} proxy={process.env.NEXT_PUBLIC_FULLRES_PROXY}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FullresProvider>
  );
}
