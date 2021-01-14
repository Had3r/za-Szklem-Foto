import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import classNames from 'classnames';

import {
  MdKeyboardArrowRight,
  FaLongArrowAltRight,
  FaLongArrowAltLeft,
} from '../../assets/icons/icons';

export const SliderArrow = ({ onClick, type }) => {
  const createArrow = type => {
    const { component, direction } = type;

    if (component === 'testimonial') {
      return (
        <TestimonialArrow tabIndex="0" onClick={onClick}>
          <MdKeyboardArrowRight className="testimonial-icon" />
        </TestimonialArrow>
      );
    }
    const arrClass = classNames({
      next: direction === 'next',
      prev: direction === 'prev',
    });
    return (
      <HeroArrow className={arrClass} tabIndex="0" onClick={onClick}>
        {direction === 'next' ? <FaLongArrowAltRight /> : <FaLongArrowAltLeft />}
      </HeroArrow>
    );
  };

  const arrow = createArrow(type);

  return arrow;
};

const TestimonialArrow = styled.div`
  ${tw`absolute cursor-pointer bg-primary-darker rounded-sm hover:bg-white hover:shadow-lg transition duration-500 outline-none`};
  right: -35px;
  top: 30%;
  transform: translate(-50%, -50%);

  @media screen and (min-width: 500px) {
    right: -65px;
    top: 50%;
  }
  .testimonial-icon {
    ${tw`text-white text-5xl hover:text-primary-darker`};

    @media screen and (min-width: 500px) {
      ${tw`text-6xl`};
    }
  }
`;

const HeroArrow = styled.div`
  ${tw`absolute bg-white cursor-pointer p-4 sm:p-8 z-10`};

  &.next,
  &.prev {
    ${tw`text-xl text-primary-darker`};
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
