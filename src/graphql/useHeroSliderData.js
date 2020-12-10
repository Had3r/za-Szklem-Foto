import { graphql, useStaticQuery } from 'gatsby';

export default function useTestimonial() {
  const data = useStaticQuery(graphql`
    {
      allContentfulHeroSlider {
        edges {
          node {
            id
            headingPrimary
            headingSecondary
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
}
