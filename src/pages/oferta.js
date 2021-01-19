import React from 'react';
import { Layout, Banner, PageHeader, OfferSection } from '../components/index';

const styles = {
  filter: 'brightness(0.4)',
};

export default () => {
  return (
    <Layout pageType="galeria">
      <Banner image="offerHero.jpg" />
      <PageHeader
        title="Oferta."
        subtitle="Wybierz swoją sesję zdjęciową z niezbędnymi opcjami, które Ci odpowiadają."
      />
      <OfferSection />
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
};
