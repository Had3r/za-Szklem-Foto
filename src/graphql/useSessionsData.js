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
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
            multipleImages {
              fluid {
                ...GatsbyContentfulFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);
  return data.allContentfulPhotoSession.edges;
}
