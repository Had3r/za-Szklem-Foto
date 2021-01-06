import { graphql, useStaticQuery } from 'gatsby';

export default function useSessionData() {
  const data = useStaticQuery(graphql`
    query getSessionData {
      allContentfulPhotoSession {
        edges {
          node {
            category
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
