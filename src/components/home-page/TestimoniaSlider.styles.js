import styled from 'styled-components';
import tw from 'twin.macro';
import quoteSVG from '../../../static/icons/quote.svg';

export const Heading = styled.h2`
  ${tw``}
`;

export const ContainerFluid = styled.section`
  ${tw`bg-primary-light`};

  @media screen and (min-width: 500px) {
    ${tw`px-12`};
  }

  .slick-slider {
    ${tw`container bg-white shadow-xl rounded-sm`};
    cursor: grab;

    @media screen and (min-width: 1200px) {
      max-width: 1100px !important;
    }

    button {
      display: none !important;
    }
  }
`;

export const Wrapper = styled.div`
  ${tw`py-16 px-4 md:py-20 container`};
`;

export const SingleSlide = styled.div`
  ${tw`sm:flex relative h-160 sm:h-96 xl:h-144`};
`;

export const TestimonialImage = styled.div`
  ${tw`w-full sm:w-2/5 sm:p-12 sm:pr-2 md:px-12`};
  height: 12rem;

  @media only screen and (min-width: 470px) {
    ${tw`h-80`}
  }
  @media only screen and (min-width: 640px) {
    ${tw`h-full`}
  }
`;

export const ImageColorLayer = styled.div`
  ${tw`h-full z-50`};
  background: rgba(73, 149, 225, 0.5);

  & div:first-child {
    ${tw`h-full -z-10`};
    filter: grayscale();
  }
`;

export const TestimonialText = styled.div`
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

export const Blockquote = styled.blockquote`
  ${tw`flex flex-col justify-evenly sm:justify-center h-full xl:leading-9 text-primary-gray`};
`;

export const Text = styled.div`
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

export const Cite = styled.cite`
  ${tw`sm:mt-4 xl:mt-10 block tracking-wide`};
`;

export const PersonsName = styled.div`
  ${tw`font-bold text-primary-darker text-lg lg:text-3xl`};
`;

export const Position = styled.div`
  ${tw`text-base lg:text-lg `}
`;
