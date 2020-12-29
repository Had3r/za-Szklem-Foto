import { graphql, useStaticQuery } from 'gatsby';

export default function useSessionData() {
  const data = useStaticQuery(graphql`
    query useFeaturedData {
      allContentfulPhotoSession(filter: { featuredSession: { eq: true } }) {
        edges {
          node {
            slug
            shortDescription
            id
            mainImage {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  return data.allContentfulPhotoSession.edges;
}
