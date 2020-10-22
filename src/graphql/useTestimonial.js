import { graphql, useStaticQuery } from 'gatsby';

export default function useTestimonial() {
  const data = useStaticQuery(graphql`
    {
      allContentfulTestimonial {
        edges {
          node {
            id
            customerId
            personsName
            authorPhoto {
              fixed(width: 150, height: 150) {
                ...GatsbyContentfulFixed_withWebp
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
