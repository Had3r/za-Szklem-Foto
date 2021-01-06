import { graphql, useStaticQuery } from 'gatsby';

export default function useSessionData() {
  const data = useStaticQuery(graphql`
    {
      allContentfulFeaturedWorks {
        edges {
          node {
            category
            shortDescription
            image {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  return data.allContentfulFeaturedWorks.edges;
}
