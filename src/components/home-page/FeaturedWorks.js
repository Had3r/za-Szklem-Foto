import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import useFeaturedWorks from '../../graphql/useFeaturedWorks';
import Img from 'gatsby-image';

export default () => {
  const featuredWorks = useFeaturedWorks();
  return (
    <ContainerFluid className="long-line">
      <Wrapper>
        <Heading className="short-line">Wyróżnione prace.</Heading>
        <Paragraph>
          Spójrz na kilka moich projektów. Do każdej sesji zdjęciowej podchodzę ze szczególną uwagę.
        </Paragraph>
        <PhotographyGrid>
          <GridRow>
            {featuredWorks.map(({ node }) => {
              const { shortDescription, id, image } = node;
              return (
                <GridItem key={id}>
                  <Img fluid={image.fluid} />
                  <Figcaption>{shortDescription}</Figcaption>
                </GridItem>
              );
            })}
          </GridRow>
        </PhotographyGrid>
      </Wrapper>
    </ContainerFluid>
  );
};

const ContainerFluid = styled.section`
  ${tw``};
`;

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
  width: 100%;
  display: grid;
  grid-template-rows: repeat(7, 200px);
  gap: 20px;

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
    ${tw`text-opacity-100`};
    transform: translate(-50%, -50%);
  }
  &:hover .gatsby-image-wrapper {
    transform: scale(1.4);
  }
  &:hover .gatsby-image-wrapper img {
    transform: scale(1.4);
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
