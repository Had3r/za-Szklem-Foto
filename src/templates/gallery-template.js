import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/index';
import styled from 'styled-components';
import tw from 'twin.macro';
import Img from 'gatsby-image';

import { Banner } from '../components/index';

export const query = graphql`
  query getSessionData($slug: String) {
    singleSessionData: allContentfulPhotoSession(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          id
          multipleImages {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          mainImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`;

export default ({ data: { singleSessionData } }) => {
  const { id, mainImage, multipleImages } = singleSessionData.edges[0].node;
  return (
    <Layout>
      <Banner image={mainImage} />
      <section className="long-line">
        <Wrapper>
          <Heading className="short-line">Galeria.</Heading>
          <Paragraph>Spójrz na rezultat mojej pracy. Jest świetny! Dupa</Paragraph>
          <GridGallery>
            {multipleImages.map((singleImage, index) => {
              return (
                <div key={id + index}>
                  <Img fluid={singleImage.fluid} />
                </div>
              );
            })}
          </GridGallery>
        </Wrapper>
      </section>
    </Layout>
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

const GridGallery = styled.div`
  ${tw`grid`};
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(auto, 100px);
  gap: 1px;

  @media screen and (min-width: 768px) {
    grid-auto-rows: minmax(auto, 200px);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(auto, 200px);
    gap: 2px;
  }
  .gatsby-image-wrapper {
    ${tw`rounded-sm h-full`};
  }
`;
