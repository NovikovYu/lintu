import React from 'react';

import {
  FooterInner,
  FooterLink,
  FooterLogoLink,
  FooterWrapper,
} from './footer-style';
import LintuIconDark from '../img/iconDark';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInner>
        <FooterLogoLink href="/">
          <LintuIconDark />
        </FooterLogoLink>

        <FooterLink href="/">© Lintu Investments 2023</FooterLink>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
