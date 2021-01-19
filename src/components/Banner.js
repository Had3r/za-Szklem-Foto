import React from 'react';
import PropTypes from 'prop-types';
import OptimizedImage from './OptimizedImage';
import { Link } from 'gatsby';
import { Container, TextSection, Heading, Paragraph, BgLayer } from './Banner.styles';

export const Banner = ({ image, imgStyles, additionalOptions, addLayer }) => {
  return (
    <BgLayer layer={addLayer}>
      <Container additionalOptions={additionalOptions}>
        <OptimizedImage style={imgStyles} background src={image} />
        {additionalOptions && (
          <TextSection>
            <Heading>{additionalOptions.title}</Heading>
            <Paragraph>{additionalOptions.subtitle}</Paragraph>
            {additionalOptions.CTA && (
              <Link to="/kontakt" className="link link-primary-outline">
                napisz do mnie
              </Link>
            )}
          </TextSection>
        )}
      </Container>
    </BgLayer>
  );
};

Banner.propTypes = {
  additionalOptions: PropTypes.object,
};

Banner.defaultProps = {
  additionalOptions: {
    CTA: false,
    questionBanner: false,
  },
};
