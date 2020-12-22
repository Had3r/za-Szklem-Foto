import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Link } from 'gatsby';
import OptimizedImage from '../OptimizedImage';

export default () => {
  return (
    <Section>
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
  ${tw`container py-16 px-4 md:py-20 flex flex-col md:flex-row `}
`;

const TextPart = styled.div`
  ${tw`flex-1`}
`;

const ImagePart = styled.div`
  ${tw`flex-1 relative`};
`;

const Frame = styled.div`
  ${tw`p-8 shadow-xl relative mx-auto md:ml-12`};
  max-width: 20rem;

  @media screen and (min-width: 768px) {
    &::before {
      ${tw`border-gray-900`};
      content: '';
      width: 60px;
      height: 1px;
      left: -60px;
      top: 80px;
      border-bottom: solid 1px;
      position: absolute;
    }
  }
`;

const Paragraph = styled.p`
  ${tw`mb-8`}
`;
