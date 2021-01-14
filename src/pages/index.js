import React from 'react';

import { Hero, Layout, TestimonialSlider, AboutMe, FeaturedWorks } from '../components/index';

export default () => (
  <Layout pageType="home">
    <Hero />
    <AboutMe />
    <TestimonialSlider />
    <FeaturedWorks />
  </Layout>
);
