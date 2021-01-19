import React from 'react';
import OptimizedImage from './OptimizedImage';
import { Link } from 'gatsby';
import { Container, TextSection, Heading, Paragraph } from './Banner.styles';

export const Banner = ({ image, imgStyles, additionalInfo }) => {
  return (
    <Container additionalInfo={additionalInfo}>
      <OptimizedImage style={imgStyles} background src={image} />
      {additionalInfo && (
        <TextSection>
          <Heading>{additionalInfo.title}</Heading>
          <Paragraph>{additionalInfo.subtitle}</Paragraph>
          <Link to="/kontakt" className="link link-primary-outline">
            napisz do mnie
          </Link>
        </TextSection>
      )}
    </Container>
  );
};
