import React from 'react';
import Slider from 'react-slick';
import SliderArrow from './SliderArrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const MultipleCarousel = ({
  children,
  appendDots,
  arrType,
  fade,
  autoplay,
  autoplaySpeed,
}) => {
  const settings = {
    dots: appendDots,
    fade,
    autoplay,
    autoplaySpeed,
    infinite: true,
    nextArrow: <SliderArrow type={{ component: arrType, direction: 'next' }} />,
    prevArrow: <SliderArrow type={{ component: arrType, direction: 'prev' }} />,
    speed: 500,
    slidesToShow: 1,
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default MultipleCarousel;

MultipleCarousel.defaultProps = {
  fade: false,
  appendDots: false,
  autoplay: true,
  autoplaySpeed: 6500,
};
