import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { TestimonialArrow, HeroArrow } from './SliderArrow.styles';
import {
  MdKeyboardArrowRight,
  FaLongArrowAltRight,
  FaLongArrowAltLeft,
} from '../../assets/icons/icons';

/**
 * Returns the carousel navigation arrows
 * @param {object} props
 * @param {object} props.type - carousel type and arrow direction
 * @param {function} props.onClick - click carousel navigation event
 */
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

SliderArrow.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.object.isRequired,
};
