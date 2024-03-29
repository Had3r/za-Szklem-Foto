import styled from 'styled-components';
import tw from 'twin.macro';

export const TestimonialArrow = styled.div`
  ${tw`absolute cursor-pointer bg-primary-medium rounded-sm hover:bg-white hover:shadow-lg transition duration-500 outline-none`};
  right: -35px;
  top: 30%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 500px) {
    right: -65px;
    top: 50%;
  }
  .testimonial-icon {
    ${tw`text-white text-5xl hover:text-primary-medium`};

    @media screen and (min-width: 500px) {
      ${tw`text-6xl`};
    }
  }
`;

export const HeroArrow = styled.div`
  ${tw`absolute bg-white cursor-pointer p-4 sm:p-8 z-10`};

  &.next,
  &.prev {
    ${tw`text-xl text-primary-medium`};
  }

  &.next {
    ${tw`bottom-0 right-0`};
  }
  &.prev {
    ${tw`bottom-0`};
    right: 52px;

    @media screen and (min-width: 640px) {
      right: 84px;
    }
  }
`;
