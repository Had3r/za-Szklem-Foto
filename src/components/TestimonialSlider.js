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
      <MiltipleCarousel>
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
  background-color: rgb(242, 242, 242);
  ${tw`py-10`};

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
  ${tw`flex relative h-144`};
`;

const TestimonialImage = styled.div`
  ${tw`w-2/5 py-12 px-12`};
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
  ${tw` px-24 flex flex-col justify-center items-center`};
  width: 55%;
`;

const Blockquote = styled.blockquote`
  ${tw`leading-9 text-primary-gray`};
`;

const Text = styled.div`
  ${tw`text-lg relative`};

  &::before {
    ${tw`bg-no-repeat w-20 h-20 block absolute`};
    content: '';
    background-image: url(${quoteSVG});
    left: -95px;
    top: -50px;
  }

  &::after {
    ${tw`bg-no-repeat w-20 h-20 block absolute`};
    content: '';
    background-image: url(${quoteSVG});
    transform: rotate(180deg);
    right: -95px;
  }
`;

const Cite = styled.cite`
  ${tw` mt-10 block tracking-wide`};
`;

const PersonsName = styled.div`
  ${tw`font-bold text-primary-darker text-3xl`};
`;

const Position = styled.div`
  ${tw`text-lg `}
`;

export default styledMultipleCarousel;
