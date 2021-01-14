import React from 'react';
import { Layout, Banner, GalleryHeader, GalleryContent } from '../components/index';

export default ({ location }) => {
  return (
    <Layout pageType="galeria">
      <Banner image="photo-bg.jpg" />
      <GalleryHeader />
      <GalleryContent location={location} />
    </Layout>
  );
};
