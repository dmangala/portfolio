import '../styles/index.scss';
//import '../public/main.js';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';

export default function App({ Component, pageProps }: AppProps) {

  return (
     <Layout>
       <Component {...pageProps} />
     </Layout>
  );

}
