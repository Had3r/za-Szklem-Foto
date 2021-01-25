import React from 'react';
import { Layout, Banner, PageHeader, GallerySection } from '../components/index';

export default ({ location }) => {
  return (
    <Layout pageType="galeria">
      <Banner image="photo-bg.jpg" />
      <PageHeader
        title="Galeria"
        subtitle="Spójrz na rezultat mojej pracy. Jest świetny!"
        additionalOptions={{
          mobileWrapper: true,
          arrow: false,
          mobileBg: '#f5f9fb',
          desktopBg: '#f5f9fb',
        }}
      />
      <GallerySection location={location} />
    </Layout>
  );
};
