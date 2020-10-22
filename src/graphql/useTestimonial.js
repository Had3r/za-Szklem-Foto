import { graphql, useStaticQuery } from 'gatsby';

export default function useTestimonial() {
  const data = useStaticQuery(graphql`
    {
      allContentfulTestimonial {
        edges {
          node {
            personsName
            authorPhoto {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            customerOpinion {
              json
            }
          }
        }
      }
    }
  `);
  return data.allContentfulTestimonial.edges;
}
