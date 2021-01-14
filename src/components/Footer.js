import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { FaFacebookF } from '../../assets/icons/icons';

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
        <Icons>
          <a href="https://www.facebook.com/zaszklemfotografia">
            <FaFacebookF />
          </a>
        </Icons>
      </Wrapper>
    </Container>
  );
};

const Container = styled.footer`
  &.long-line::before {
    ${tw`block`}
    top: 1rem;
  }
`;

const Wrapper = styled.div`
  ${tw`container py-16 px-4 sm:px-0 md:py-20 `};
`;

const Paragraph = styled.p`
  ${tw`text-xs text-gray-700 font-light leading-loose`};
`;

const Icons = styled.span`
  ${tw`mt-8 text-gray-800 hover:text-gray-700 text-xs`}

  svg {
    ${tw`inline-block`}
  }
`;
