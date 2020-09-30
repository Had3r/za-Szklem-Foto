import React from 'react';
import Background from './Background';
import styled from 'styled-components';
import tw from 'tailwind.macro';
import { Link } from 'gatsby';

export default () => {
  return (
    <Wrapper>
      <Background>
        <Article>
          <h3>If you can cream it, we can create it</h3>
          <h1>let your home be unique and stylish</h1>
          <Link to="/">link</Link>
        </Article>
      </Background>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  ${tw`text-color-primary `}
`;

const Article = styled.article`
  ${tw`flex flex-col justify-center items-center h-full`}
`;
