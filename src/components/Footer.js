import React from 'react';

import { FaFacebookF } from '../../assets/icons/icons';
import { Link } from 'gatsby';
import { Container, Wrapper, Paragraph, Icons } from './Footer.styles';

export const Footer = () => {
  return (
    <Container className="long-line">
      <Wrapper>
        <Paragraph>
          Tel: <a href="tel:601 995 363">+48 601 995 363</a>
        </Paragraph>
        <Paragraph>
          Email: <a href="mailto: zaszklemfotografia@outlook.com">zaszklemfotografia@outlook.com</a>
        </Paragraph>
        <Paragraph>Adres: ul. Feliksa Stamma 59-300 Lubin</Paragraph>
        <Paragraph>
          <Link to="/polityka-prywatnosci">Polityka prywatności</Link>
        </Paragraph>
        <Icons>
          <a aria-label="Facebook" href="https://www.facebook.com/zaszklemfotografia">
            <FaFacebookF />
          </a>
        </Icons>
      </Wrapper>
    </Container>
  );
};
