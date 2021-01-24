import React from 'react';
import { Layout, Banner, ContactBoxes, PageHeader, ContactForm } from '../components/index';

const styles = {
  filter: 'contrast(.6) grayscale(100%)',
  zIndex: '-1',
};

export default () => {
  return (
    <Layout>
      <Banner
        additionalOptions={{
          title: 'Skontaktuj się',
          subtitle:
            'Chcesz się ze mną skontaktować? Poniej wybierz formę kontaktu. Oto, jak możesz się z nami skontaktować',
        }}
        addLayer
        image="photo-bg.jpg"
        imgStyles={styles}
      />
      <ContactBoxes />
      <PageHeader
        singleSubtitle="Wraz z Tobą doskonalę się i rozwijam, dlatego chętnie przyjmę wszelkie Twoje opinie,
            krytykę, sugestie i pytania."
      />
      <ContactForm />
    </Layout>
  );
};
