import React from 'react';
import { Layout, Banner, ContactBoxes, PageHeader, ContactForm } from '../components/index';

const styles = {
  filter: 'contrast(.6) grayscale(100%)',
  zIndex: '-1',
};

export default ({ location }) => {
  return (
    <Layout
      pageType="contact"
      SEOdata={{
        title: 'Za Szkłem Fotografia - Kontakt',
        description:
          'W mojej ofercie znajduje się fotografia noworodkowa, okolicznościowa, weselna i wiele innych!',
        canonical: location.href,
      }}>
      <Banner
        additionalOptions={{
          title: 'Skontaktuj się',
          subtitle:
            'Chcesz się ze mną skontaktować? Poniej wybierz formę kontaktu. Oto, jak możesz się z nami skontaktować',
        }}
        addLayer
        image="keyboard.jpg"
        imgStyles={styles}
      />
      <ContactBoxes />
      <PageHeader
        singleSubtitle="Wraz z Tobą doskonalę się i rozwijam, dlatego chętnie przyjmę wszelkie Twoje opinie,
            krytykę, sugestie i pytania."
        additionalOptions={{
          mobileWrapper: false,
          mobileBg: '#fff',
          desktopBg: '#fff',
        }}
      />
      <ContactForm />
    </Layout>
  );
};
