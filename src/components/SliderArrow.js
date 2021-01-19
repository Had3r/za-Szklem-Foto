import React from 'react';
import classNames from 'classnames';

import { TestimonialArrow, HeroArrow } from './SliderArrow.styles';
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
