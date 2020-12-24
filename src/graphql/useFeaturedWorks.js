import { graphql, useStaticQuery } from 'gatsby';

// todo: delete this file (move to gatsby-node)
export default function useFeaturedWorks() {
  const data = useStaticQuery(graphql`
    {
      allContentfulFeaturedWorks {
        edges {
          node {
            slug
            shortDescription
            id
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
