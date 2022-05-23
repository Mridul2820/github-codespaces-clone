import axios from 'axios';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import '../styles/globals.css';

// SEO
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

function MyApp({ Component, pageProps, headerData, footerdata }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Navbar headerData={headerData} />
      <Component {...pageProps} />
      <Footer footerdata={footerdata} />
    </>
  );
}

MyApp.getInitialProps = async () => {
  const { API_URL } = process.env;
  const { data } = await axios(`${API_URL}/headerfooter`);

  return {
    headerData: data.header,
    footerdata: data.footer,
  };
};

export default MyApp;
