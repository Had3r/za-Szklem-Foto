import React from 'react';
import { graphql } from 'gatsby';

import { Hero, Layout, TestimonialSlider } from '../components/index';

export default () => (
  <Layout>
    <Hero />
    <TestimonialSlider />
  </Layout>
);
