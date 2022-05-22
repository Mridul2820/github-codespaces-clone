import React from 'react';
import FooterBottom from './FooterBottom';

const Footer = ({ footerdata }) => {
  console.log(footerdata);
  return (
    <div>
      <FooterBottom links={footerdata.footerBottom.links} />
    </div>
  );
};

export default Footer;
