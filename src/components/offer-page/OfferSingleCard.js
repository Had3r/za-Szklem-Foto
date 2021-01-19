import React from 'react';
import { Wrapper, ImagePart, TextPart, Heading, Paragraph, CTA } from './OfferSingleCard.styles';
import { FaLongArrowAltRight } from '../../../assets/icons/icons';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

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
