import { graphql, useStaticQuery } from 'gatsby';

export const useOfferData = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulOffer {
        edges {
          node {
            id
            typeOfService
            shortDescription
            slug
            imageOnTheCard {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            detailsImages {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            detailsOfOffer {
              json
            }
          }
        }
      }
    }
  `);
  return data.allContentfulOffer.edges;
};
