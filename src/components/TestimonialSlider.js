import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import MiltipleCarousel from './MultipleCarousel';
import quoteSVG from '../../static/icons/quote.svg';
import BackgroundImage from 'gatsby-background-image-es5';
import useTestimonial from '../graphql/useTestimonial';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Carousel = ({ className }) => {
  const testimonial = useTestimonial();

  return (
    <Wrapper className={className}>
      <Heading>Co mówią ludzie...</Heading>
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
                  <ImageColorLayer className="test">
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
  );
};

const Heading = styled.h2`
  ${tw`container`}
`;

const styledMultipleCarousel = styled(Carousel)`
  ${tw`relative`};
`;

const Wrapper = styled.section`
  ${tw`py-10 px-4 bg-secondary-gray`};

  @media screen and (min-width: 500px) {
    ${tw`px-12`};
  }

  .slick-slider {
    ${tw`container bg-white shadow-xl rounded-sm`};

    @media screen and (min-width: 1200px) {
      max-width: 1100px !important;
    }

    button {
      display: none !important;
    }
  }
`;

const SingleSlide = styled.div`
  ${tw`sm:flex relative h-160 sm:h-96 xl:h-144`};
`;

const TestimonialImage = styled.div`
  ${tw`w-full sm:w-2/5 sm:p-12 sm:pr-2 md:px-12`};
  height: 12rem;

  @media only screen and (min-width: 470px) {
    ${tw`h-80`}
  }
  @media only screen and (min-width: 640px) {
    ${tw`h-full`}
  }
`;

const ImageColorLayer = styled.div`
  ${tw`h-full z-50`};
  background: rgba(73, 149, 225, 0.5);

  & div:first-child {
    ${tw`h-full -z-10`};
    filter: grayscale();
  }
`;

const TestimonialText = styled.div`
  ${tw` sm:h-full px-4 pt-8 sm:pt-0 xl:px-24 flex flex-col justify-center items-center`};
  height: 28rem;

  @media only screen and (min-width: 470px) {
    height: 20rem;
  }

  @media only screen and (min-width: 640px) {
    width: 55%;
    height: 100%;
  }
`;

const Blockquote = styled.blockquote`
  ${tw`flex flex-col justify-evenly sm:justify-center h-full  xl:leading-9 text-primary-gray`};
`;

const Text = styled.div`
  ${tw`text-base lg:text-lg relative`};

  &::before {
    ${tw`sm:hidden xl:block absolute bg-no-repeat w-8 h-8 xl:w-20 xl:h-20`};
    content: '';
    background-image: url(${quoteSVG});
    left: 0px;
    top: -35px;

    @media screen and (min-width: 640px) {
      left: -95px;
      top: -50px;
    }
  }

  &::after {
    ${tw`sm:hidden xl:block absolute bg-no-repeat w-8 h-8 xl:w-20 xl:h-20`};
    content: '';
    background-image: url(${quoteSVG});
    transform: rotate(180deg);
    right: 0;

    @media screen and (min-width: 640px) {
      right: -95px;
    }
  }
`;

const Cite = styled.cite`
  ${tw`sm:mt-4 xl:mt-10 block tracking-wide`};
`;

const PersonsName = styled.div`
  ${tw`font-bold text-primary-darker text-lg lg:text-3xl`};
`;

const Position = styled.div`
  ${tw`text-base lg:text-lg `}
`;

export default styledMultipleCarousel;
