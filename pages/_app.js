import axios from 'axios';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import '../styles/globals.css';

// SEO
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';
import { data } from '../data/headerfooter';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar headerData={data.header} />
      <Component {...pageProps} />
      <Footer footerdata={data.footer} />
    </>
  );
}

export default MyApp;
