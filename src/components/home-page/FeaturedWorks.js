import React from 'react';
import useFeaturedWorks from '../../graphql/useFeaturedWorks';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import {
  Wrapper,
  Heading,
  Paragraph,
  PhotographyGrid,
  GridRow,
  GridItem,
  Figcaption,
} from './FeaturesWorks.styles';

export const FeaturedWorks = () => {
  const featuredWorks = useFeaturedWorks();
  return (
    <section className="long-line">
      <Wrapper>
        <Heading className="short-line">Wyróżnione zdjęcia.</Heading>
        <Paragraph>
          Spójrz na kilka moich projektów. Do każdej sesji zdjęciowej podchodzę ze szczególną uwagę.
        </Paragraph>
        <PhotographyGrid>
          <GridRow>
            {featuredWorks.map(({ node }) => {
              const { category, image, shortDescription, id } = node;
              return (
                <GridItem key={id}>
                  <Link to="/galeria/" state={{ category: category }}>
                    <Img fluid={image.fluid} />
                    <Figcaption>{shortDescription}</Figcaption>
                  </Link>
                </GridItem>
              );
            })}
          </GridRow>
        </PhotographyGrid>
      </Wrapper>
    </section>
  );
};
