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
  ${tw`text-center`}
`;

const PhotographyGrid = styled.div`
  ${tw`container`}
`;

// TODO: start here from creating custom grid
const GridRow = styled.div`
  display: grid;
  grid-template-rows: repeat(7, 200px);
  width: 100%;
`;

const GridItem = styled.div`
  ${tw``};
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
