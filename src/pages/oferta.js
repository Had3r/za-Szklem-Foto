import React from 'react';
import { Layout, Banner, PageHeader, OfferSection } from '../components/index';

export default () => {
  return (
    <Layout pageType="galeria">
      <Banner image="offerHero.jpg" />
      <PageHeader
        title="Oferta."
        subtitle="Wybierz swoją sesję zdjęciową z niezbędnymi opcjami, które Ci odpowiadają."
      />
      <OfferSection />
    </Layout>
  );
};
