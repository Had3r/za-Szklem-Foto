import React from 'react';
import Background from './Background';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

export default () => {
  return (
    <Section>
      <Background>
        <Header>
          <h3>If you can cream it, we can create it</h3>
          <HeadingPrimary>Za Szkłem Fotografia</HeadingPrimary>
          <Link className="link-primary" to="/">
            zobacz więcej
          </Link>
        </Header>
      </Background>
    </Section>
  );
};

const Section = styled.section`
  ${tw`text-white`}
`;

const Header = styled.header`
  ${tw`flex flex-col justify-center items-center h-full text-center p-4`}
`;

const HeadingPrimary = styled.h1`
  ${tw`my-5`}
`;
