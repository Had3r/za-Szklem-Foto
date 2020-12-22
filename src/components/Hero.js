import React from 'react';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import useHeroSliderData from '../graphql/useHeroSliderData';
import MultipleCarousel from './MultipleCarousel';
import BackgroundImage from 'gatsby-background-image-es5';

export default () => {
  const heroData = useHeroSliderData();
  return (
    <Section>
      <MultipleCarousel appendDots autoplaySpeed={4500} arrType="hero">
        {heroData.map(singleItem => {
          const { image, headingPrimary, headingSecondary: paragraphText, id } = singleItem.node;
          return (
            <div key={id}>
              <Wrapper>
                <TextContent>
                  <HeadingPrimary>{headingPrimary}</HeadingPrimary>
                  <Paragraph>{paragraphText}</Paragraph>
                </TextContent>
              </Wrapper>
              <BackgroundImage className="background" preserveStackingContext fluid={image.fluid} />
            </div>
          );
        })}
      </MultipleCarousel>
      <ScrollDown onClick={() => console.log('navigate to specific section')}>
        <span />
      </ScrollDown>
    </Section>
  );
};

const Section = styled.section`
  ${tw`text-white h-screen -mt-20 relative`};

  .background {
    ${tw`h-screen`};
  }

  /** 
  *  Slider.
  *  React-slick styles are overridden by the declaration of important.
  */
  .slick-slider {
    ${tw`h-screen`};
  }

  /* Slider navigation buttons (horizontal lines) */
  .slick-dots {
    ${tw`items-end relative w-auto p-4 sm:p-0 container`};
    display: flex !important;
    margin-top: -90px;

    &:first-child {
      margin-left: 15px;
    }

    li button:before {
      content: none;
    }
    li {
      ${tw`w-2 h-auto`};
    }
    li.slick-active button {
      ${tw`h-8`};
    }
    li button {
      ${tw`p-0 bg-primary-darker`};
      width: 2px;
      height: 12px;
    }
  }
`;

const Wrapper = styled.div`
  ${tw`absolute w-screen flex flex-col justify-center`};
  height: calc(100vh - 5rem);
`;

const TextContent = styled.div`
  ${tw`p-4 sm:p-0 container`};
`;

const HeadingPrimary = styled.h1`
  ${tw`my-5`};
`;
const Paragraph = styled.p`
  ${tw`sm:w-7/12 text-base font-light leading-7`};
`;

const moveDots = y => keyframes`
  0% {
        opacity: 0;
      }
  100% {
        opacity: 1;
        top: ${y}px;
      }
`;

const ScrollDown = styled.button`
  ${tw`w-8 h-8 absolute`};
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 15px;
  span {
    ${tw`relative`};
  }
  span::before,
  span::after {
    ${tw`text-opacity-100 absolute w-2 h-2 bg-gray-400 rounded-full`};
    content: '';
  }

  span::before {
    top: -35px;
    left: -4px;
    animation: ${() => moveDots(-15)} 2s ease-in-out infinite;
  }
  span::after {
    top: -15px;
    left: -4px;
    animation: ${() => moveDots(5)} 2s ease-in-out infinite;
  }
`;
