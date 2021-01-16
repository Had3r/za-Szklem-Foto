import React from 'react';

import { OfferSingleCard } from './OfferSingleCard';

import { Grid } from './OfferCards.styles';

export const OfferCards = () => {
  return (
    <Grid>
      <OfferSingleCard
        heading="Fotografia Weselna"
        description=" Fotografia Weselna jest świetna i najlepsza musisz ją koniecznie wybrać."
        image="offerHero.jpg"
      />
      <OfferSingleCard
        heading="Fotografia Okolicznościowa"
        description="Zachowaj pamiątkę z chrzcin, komunii, imprezy wujka, imienin babci."
        image="mainBcg.jpg"
      />
      <OfferSingleCard
        heading="Pozostałe"
        description="Wykonuję równie sesje na specjalne zamówienia - portrery, fotografie ciązowe i inne."
        image="photo-bg.jpg"
      />
    </Grid>
  );
};
