import React from 'react';
import { Layout, Banner, PageHeader, GallerySection } from '../components/index';

export default ({ location }) => {
  return (
    <Layout pageType="galeria">
      <Banner image="photo-bg.jpg" />
      <PageHeader
        title="Galeria"
        subtitle="Spójrz na rezultat mojej pracy. Jest świetny!"
        bgColor="#f5f9fb"
        additionalOptions={{
          mobileWrapper: true,
          mobileBg: '#f5f9fb',
          desktopBg: '#f5f9fb',
          arrow: false,
        }}
      />
      <GallerySection location={location} />
    </Layout>
  );
};
