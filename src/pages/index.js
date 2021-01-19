import React from 'react';

import {
  Hero,
  Layout,
  TestimonialSlider,
  AboutMe,
  FeaturedWorks,
  Banner,
} from '../components/index';

const styles = {
  filter: 'brightness(0.4)',
};

export default () => (
  <Layout pageType="home">
    <Hero />
    <AboutMe />
    <TestimonialSlider />
    <FeaturedWorks />
    <Banner
      image="photo-bg.jpg"
      imgStyles={styles}
      additionalInfo={{
        title: 'Porozmawiaj ze mną o swoim pomyśle',
        subtitle:
          'Skontaktuj się ze mną i dowiedz się, jak mogę pomóc Ci stworzyć pamiątkę na całe zycie',
      }}
    />
  </Layout>
);
