import { graphql, useStaticQuery } from 'gatsby';

export default function useSessionData() {
  const data = useStaticQuery(graphql`
    query getSessionData {
      allContentfulPhotoSession {
        edges {
          node {
            category
            id
            mainImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            multipleImages {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `);
  return data.allContentfulPhotoSession.edges;
}
