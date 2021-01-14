import React from 'react';

import MiltipleCarousel from '../MultipleCarousel';
import BackgroundImage from 'gatsby-background-image-es5';
import useTestimonial from '../../graphql/useTestimonial';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {
  Heading,
  ContainerFluid,
  Wrapper,
  SingleSlide,
  TestimonialImage,
  ImageColorLayer,
  TestimonialText,
  Blockquote,
  Text,
  Cite,
  PersonsName,
  Position,
} from './TestimoniaSlider.styles';

export const TestimonialSlider = () => {
  const testimonial = useTestimonial();

  return (
    <ContainerFluid>
      <Wrapper>
        <h3>Referencje</h3>
        <Heading>Co mówią ludzie.</Heading>
        <MiltipleCarousel fade autoplay arrType="testimonial">
          {testimonial.map(singleOpinion => {
            const {
              id,
              personsName,
              authorPhoto,
              customerOpinion,
              positionOrCompany,
            } = singleOpinion.node;
            return (
              <div key={id}>
                <SingleSlide>
                  <TestimonialImage>
                    <ImageColorLayer>
                      <BackgroundImage preserveStackingContext fluid={authorPhoto.fluid} />
                    </ImageColorLayer>
                  </TestimonialImage>
                  <TestimonialText>
                    <Blockquote>
                      <Text>{documentToReactComponents(customerOpinion.json)}</Text>
                      <Cite>
                        <PersonsName>{personsName}</PersonsName>
                        <Position>{positionOrCompany || ''}</Position>
                      </Cite>
                    </Blockquote>
                  </TestimonialText>
                </SingleSlide>
              </div>
            );
          })}
        </MiltipleCarousel>
      </Wrapper>
    </ContainerFluid>
  );
};
