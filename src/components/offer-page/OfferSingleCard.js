import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, ImagePart, TextPart, Heading, Paragraph, CTA } from './OfferSingleCard.styles';
import { FaLongArrowAltRight } from '../../../assets/icons/icons';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

/**
 * Renders a single card with information about the offer
 * @param {object} props
 * @param {string} props.heading
 * @param {string} props.description
 * @param {Object} props.image
 * @param {string} props.slug
 */
export const OfferSingleCard = ({ heading, description, image, slug }) => {
  return (
    <Link to={`/oferta/${slug}/`}>
      <Wrapper>
        <ImagePart>
          <Img fluid={image.fluid} />
        </ImagePart>
        <TextPart>
          <Heading>{heading}</Heading>
          <Paragraph>{description}</Paragraph>
          <CTA>
            Zobacz więcej <FaLongArrowAltRight />
          </CTA>
        </TextPart>
      </Wrapper>
    </Link>
  );
};

OfferSingleCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  slug: PropTypes.string.isRequired,
};
