import React from 'react';
import Slider from 'react-slick';
import NextArrow from './NextArrow';
import HeroSliderArrow from './HeroSliderArrow';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default ({ children, appendDots, arrType }) => {
  const settings = {
    dots: appendDots,
    fade: false,
    autoplay: false,
    autoplaySpeed: 6500,
    infinite: true,
    // nextArrow: <NextArrow />,
    nextArrow: arrType === 'hero' ? <HeroSliderArrow /> : <NextArrow />,
    speed: 500,
    slidesToShow: 1,
  };

  return <Slider {...settings}>{children}</Slider>;
};
