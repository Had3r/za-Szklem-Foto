import React from 'react';
import OptimizedImage from '../OptimizedImage';
import { Wrapper, ImagePart, TextPart, Heading, Paragraph, CTA } from './OfferSingleCard.styles';
import { FaLongArrowAltRight } from '../../../assets/icons/icons';

export const OfferSingleCard = ({ heading, description, image }) => {
  return (
    <Wrapper>
      <ImagePart>
        <OptimizedImage src={image} />
      </ImagePart>
      <TextPart>
        <Heading>{heading}</Heading>
        <Paragraph>{description}</Paragraph>
        <CTA>
          Zobacz więcej <FaLongArrowAltRight />
        </CTA>
      </TextPart>
    </Wrapper>
  );
};
