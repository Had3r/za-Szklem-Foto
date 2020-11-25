import React from 'react';
import Slider from 'react-slick';
import NextArrow from './NextArrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default ({ children }) => {
  const settings = {
    dots: true,
    fade: true,
    // autoplay: true,
    infinite: true,
    nextArrow: <NextArrow />,
    lazyLoad: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
  };

  return <Slider {...settings}>{children}</Slider>;
};
