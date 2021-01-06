import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export default () => {
  return (
    <Footer className="long-line">
      <Wrapper>
        <Paragraph>Tel: 111 111 111</Paragraph>
        <Paragraph>Email: email@email.com</Paragraph>
        <Paragraph>Adres: ul.Dummy 10</Paragraph>
        <Icons>icons</Icons>
      </Wrapper>
    </Footer>
  );
};

const Footer = styled.footer`
  ${tw``};
  &.long-line::before {
    ${tw`block`}
    top: 1rem;
  }
`;

const Wrapper = styled.div`
  ${tw`container py-16 px-4 md:py-20`};
`;

const Paragraph = styled.p`
  ${tw`text-sm text-gray-600`};
`;

// TODO: start here
const Icons = styled.div`
  ${tw`mt-8`}
`;
