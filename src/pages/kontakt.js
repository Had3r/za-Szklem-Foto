import React from 'react';
import { Layout, Banner, ContactBoxes, PageHeader, ContactForm } from '../components/index';

const styles = {
  filter: 'contrast(2) grayscale(100%)',
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
        onlySubtitle
        title="Galeria"
        subtitle="Spójrz na rezultat mojej pracy. Jest świetny!"
      />
      <ContactForm />
    </Layout>
  );
};
