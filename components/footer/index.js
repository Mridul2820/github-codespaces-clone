import React from 'react';
import FooterBottom from './FooterBottom';
import FooterTop from './FooterTop';

const Footer = ({ footerdata }) => {
  return (
    <footer>
      <FooterTop rows={footerdata.footerTop.linkRows} />
      <FooterBottom links={footerdata.footerBottom.links} />
    </footer>
  );
};

export default Footer;
