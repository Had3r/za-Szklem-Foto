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
  backgroundAttachment: 'fixed',
};

export default ({ location }) => {
  return (
    <Layout
      pageType="home"
      SEOdata={{
        title: 'Fotografia na kazdą okazje',
        description:
          'Fotografia: -noworodkowa -dziecięca -ślubna - okolicznościowa itp. Studio w Lubinie oraz w Lwówku Śląskim.',
        canonical: location.href,
      }}>
      <Hero />
      <AboutMe />
      <TestimonialSlider />
      <FeaturedWorks />
      <Banner
        image="photo-bg.jpg"
        imgStyles={styles}
        additionalOptions={{
          title: 'Porozmawiaj ze mną o swoim pomyśle',
          subtitle:
            'Skontaktuj się ze mną i dowiedz się, jak mogę pomóc Ci stworzyć pamiątkę na całe zycie',
          CTA: true,
          questionBanner: true,
        }}
      />
    </Layout>
  );
};
