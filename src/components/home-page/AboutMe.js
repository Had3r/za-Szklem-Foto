import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import OptimizedImage from '../OptimizedImage';

export default () => {
  return (
    <Section id="about-me">
      <TextPart>
        <h3>o mnie</h3>
        <h2>Jestem bardzo dobrym fotografem.</h2>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad totam facere rerum velit
          aliquid recusandae. Maxime rerum debitis recusandae voluptatibus rem dolorem, laborum
          minima sit est architecto quae modi at.
        </Paragraph>
        <Link to="/" className="link-primary">
          Czytaj więcej
        </Link>
      </TextPart>
      <ImagePart>
        <Frame>
          <OptimizedImage className="img" src="/aboutMe.jpg" />
        </Frame>
      </ImagePart>
    </Section>
  );
};

const Section = styled.section`
  ${tw`container py-16 px-4 sm:px-0 md:py-20 flex flex-col md:flex-row`};
`;

const TextPart = styled.div`
  ${tw`flex-1`};
`;

const ImagePart = styled.div`
  ${tw`flex-1 relative mt-8 md:mt-0`};
`;

const Frame = styled.div`
  ${tw`p-8 xl:p-12 shadow-xl relative mx-auto md:mr-0 max-w-xs lg:max-w-sm xl:max-w-md`};

  &::before {
    ${tw`absolute border-gray-900 w-12 h-1 lg:w-20 xl:w-32`};
    content: '';
    border-bottom: solid 1px;
    @media screen and (min-width: 768px) {
      left: -48px;
      top: 115px;
    }
    @media screen and (min-width: 1024px) {
      left: -80px;
    }
    @media screen and (min-width: 1280px) {
      left: -128px;
    }
  }
`;

const Paragraph = styled.p`
  ${tw`mb-8`}
`;
