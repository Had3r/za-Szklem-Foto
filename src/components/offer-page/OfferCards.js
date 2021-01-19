import React from 'react';

import { OfferSingleCard } from './OfferSingleCard';
import { Grid } from './OfferCards.styles';
import { useOfferData } from '../../graphql/useOfferData';

export const OfferCards = () => {
  const data = useOfferData();
  return (
    <Grid>
      {data.map(({ node }) => {
        const { typeOfService, shortDescription, imageOnTheCard, slug, id } = node;
        return (
          <OfferSingleCard
            heading={typeOfService}
            description={shortDescription}
            image={imageOnTheCard}
            slug={slug}
            key={id}
          />
        );
      })}
    </Grid>
  );
};
