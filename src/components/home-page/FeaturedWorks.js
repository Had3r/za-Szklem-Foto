import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import useFeaturedWorks from '../../graphql/useFeaturedWorks';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import { nanoid } from 'nanoid';

export default () => {
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
              const { category, image, shortDescription } = node;
              return (
                <GridItem key={nanoid()}>
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

const Wrapper = styled.div`
  ${tw`container py-16 px-4 md:py-20`};
`;

const Heading = styled.h2`
  ${tw`text-center`}
`;

const Paragraph = styled.p`
  ${tw`text-center mb-10`}
`;

const PhotographyGrid = styled.div`
  ${tw`container`}
`;

const GridRow = styled.div`
  ${tw`w-full grid gap-5`};
  grid-template-rows: repeat(7, 200px);

  @media screen and (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 200px);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 200px);
    gap: 10px;
  }
`;

const GridItem = styled.figure`
  ${tw`relative cursor-pointer overflow-hidden`};
  &:hover figcaption {
    ${tw`text-opacity-100 transform -translate-y-1/2 -translate-x-1/2`};
  }
  &:hover .gatsby-image-wrapper {
    ${tw`transform scale-150`}
  }
  &:hover .gatsby-image-wrapper img {
    ${tw`transform scale-150`}
    filter: blur(1px) brightness(80%);
  }

  @media screen and (min-width: 1024px) {
    &:nth-child(3) {
      grid-area: 1 / 3 / -1 / 4;
    }
  }
  .gatsby-image-wrapper {
    ${tw`w-full h-full`};
  }
  .gatsby-image-wrapper img {
    /* property override from gatsby-image */
    transition: 0.5s transform !important;
  }
`;

const Figcaption = styled.figcaption`
  ${tw`absolute text-white uppercase text-center text-base text-opacity-0`};
  top: 50%;
  left: 50%;
  transform: translate(-50%, 20%);
  transition: 0.5s all;
  backface-visibility: hidden;
`;
