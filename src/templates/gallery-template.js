import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Banner } from '../components/index';
import styled from 'styled-components';
import tw from 'twin.macro';
import Img from 'gatsby-image';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

// export const query = graphql`
//   query getSessionData($slug: String) {
//     singleSessionData: allContentfulPhotoSession(filter: { slug: { eq: $slug } }) {
//       edges {
//         node {
//           id
//           multipleImages {
//             fluid {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//           mainImage {
//             fluid {
//               ...GatsbyContentfulFluid_withWebp
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export default ({ data: { singleSessionData } }) => {
  const { id, mainImage, multipleImages } = singleSessionData.edges[0].node;
  const wrapperStyle = {
    width: '100%',
    height: '100%',
  };
  return (
    <Layout>
      <Banner image={mainImage} />
      <section className="long-line">
        <Wrapper>
          <Heading className="short-line">Galeria.</Heading>
          <Paragraph>Spójrz na rezultat mojej pracy. Jest świetny!</Paragraph>
        </Wrapper>
      </section>
      <GridGallery>
        {multipleImages.map((singleImage, index) => {
          return (
            <Zoom key={id + index}>
              <Img style={wrapperStyle} fluid={singleImage.fluid} />
            </Zoom>
          );
        })}
      </GridGallery>
    </Layout>
  );
};

const Wrapper = styled.div`
  ${tw`container py-12 px-4`};
`;

const Heading = styled.h2`
  ${tw`text-center`}
`;

const Paragraph = styled.p`
  ${tw`text-center mb-10`}
`;

const GridGallery = styled.div`
  ${tw`grid `};
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(auto, 100px);
  gap: 1px;
  margin: 0 1px;

  @media screen and (min-width: 530px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 768px) {
    ${tw`container`}
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
