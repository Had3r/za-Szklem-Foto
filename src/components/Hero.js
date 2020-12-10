import React from 'react';
import Background from './Background'; // to REMOVE
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import useHeroSliderData from '../graphql/useHeroSliderData';
import { FaLongArrowAltLeft, FaLongArrowAltRight } from '../../assets/icons/icons';
import MultipleCarousel from './MultipleCarousel';
import OptimizedImage from './OptimizedImage';
import BackgroundImage from 'gatsby-background-image-es5';
import HeroSliderArrow from './HeroSliderArrow';

export default () => {
  const heroData = useHeroSliderData();
  return (
    <Section>
      <MultipleCarousel appendDots arrType="hero">
        {heroData.map(singleItem => {
          const { image, headingPrimary, headingSecondary, id } = singleItem.node;
          return (
            <div key={id}>
              <Wrapper>
                <TextContent>
                  <HeadingPrimary>{headingPrimary}</HeadingPrimary>
                  <HeadingTertiary>{headingSecondary}</HeadingTertiary>
                </TextContent>
              </Wrapper>
              <BackgroundImage className="background" preserveStackingContext fluid={image.fluid} />
            </div>
          );
        })}
      </MultipleCarousel>
    </Section>
  );
};

const Section = styled.section`
  ${tw`text-white h-screen -mt-20 relative`};

  .background {
    ${tw`h-screen`};
  }

  /** 
  *  Slider 
  *  The inline style override from react-slick comes with an important declaration 
  */
  .slick-slider {
    height: 100vh;
  }

  /* Slider nav buttons  */
  .slick-dots {
    ${tw`items-end`};
    display: flex !important;
    bottom: 40px;

    &:first-child {
      margin-left: 15px;
    }

    li button:before {
      content: none;
    }
    li {
      height: auto;
      ${tw`w-2`};
    }
    li.slick-active button {
      ${tw`h-8`};
    }
    li button {
      ${tw`p-0`};
      width: 2px;
      height: 12px;
      background: red;
    }
  }

  /* Slider arrows  */
  .slick-arrow {
    ${tw`z-20`};
    background: #fff;
    padding: 2rem;
    /* display: none !important; */

    &.slick-next {
      right: 0;
      bottom: 0;

      &::before {
        background: red;
      }
    }
  }
`;

const Wrapper = styled.div`
  ${tw`absolute  w-screen flex flex-col justify-center`};
  height: calc(100vh - 5rem);
`;

const TextContent = styled.div`
  ${tw`container`};
`;

const HeadingPrimary = styled.h1`
  ${tw`my-5 `};
`;
const HeadingTertiary = styled.h3`
  ${tw`sm:w-7/12`};
`;

const Test = styled.div`
  ${tw`absolute w-full h-full`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.header`
  ${tw`flex flex-col justify-between h-full`};
`;

const Top = styled.div``;

const Center = styled.div`
  ${tw`p-4 md:p-8 sm:w-7/12`};
`;

const Bottom = styled.div`
  ${tw`flex justify-between`}
`;

const Buttons = styled.div`
  ${tw`bg-white`};
`;

const Button = styled.button`
  ${tw`w-14 h-14 `};

  &:hover svg {
    ${tw`transition duration-500 text-primary-darker`};
  }

  svg {
    ${tw`text-base mx-auto `};
  }

  &.left {
    ${tw`text-gray-900`};
  }
  &.right {
    ${tw`text-gray-900`};
  }
`;

const Dots = styled.div`
  ${tw`flex items-baseline ml-4 md:ml-8 mb-4`};
`;

const SingleDot = styled.div`
  ${tw`cursor-pointer bg-white flex mr-4 w-0.5`};
  height: 35%;

  &.active {
    ${tw`bg-primary-darker`}
    height: 90%;
  }
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

// TODO: convert to Tailwind util classes
const ScrollDown = styled.button`
  ${tw`w-8`};
  span {
    position: relative;
  }
  span::before,
  span::after {
    opacity: 1;
    position: absolute;
    content: '';
    width: 8px;
    height: 8px;
    background-color: #fff;
    border-radius: 100%;
  }

  span::before {
    top: -35px;
    animation: ${() => moveDots(-15)} 2s ease-in-out infinite;
  }
  span::after {
    top: -15px;
    animation: ${() => moveDots(5)} 2s ease-in-out infinite;
  }
`;
