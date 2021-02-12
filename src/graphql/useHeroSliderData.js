import { graphql, useStaticQuery } from 'gatsby';

export const useHeroData = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulHeroSlider {
        edges {
          node {
            id
            textPrimary
            textSecondary
            textTertiary
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
  return data.allContentfulHeroSlider.edges;
};
