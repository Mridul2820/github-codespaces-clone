import Navbar from '../components/Navbar';

import '../styles/globals.css';

// SEO
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
