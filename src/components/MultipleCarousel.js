import React from 'react';
import Slider from 'react-slick';
import NextArrow from './NextArrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default ({ children }) => {
  const settings = {
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 6500,
    infinite: true,
    nextArrow: <NextArrow />,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 1,
  };

  return <Slider {...settings}>{children}</Slider>;
};
