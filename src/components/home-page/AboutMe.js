import React from 'react';
import { Link } from 'gatsby';
import OptimizedImage from '../OptimizedImage';

import { Section, TextPart, ImagePart, Frame, Paragraph } from './AboutMe.styles';

export const AboutMe = () => {
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
        <Link to="/oferta" className="link link-primary">
          Sprawdź ofertę
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
