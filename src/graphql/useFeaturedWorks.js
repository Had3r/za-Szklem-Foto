import { graphql, useStaticQuery } from 'gatsby';

export default function useSessionData() {
  // const data = useStaticQuery(graphql`
  //   query useFeaturedData {
  //     allContentfulPhotoSession(filter: { featuredSession: { eq: true } }) {
  //       edges {
  //         node {
  //           slug
  //           mainImage {
  //             fluid {
  //               ...GatsbyContentfulFluid_withWebp
  //             }
  //           }
  //           multipleImages {
  //             fluid {
  //               ...GatsbyContentfulFluid_withWebp
  //             }
  //           }
  //           featuredSession
  //         }
  //       }
  //     }
  //   }
  // `);
  // return data.allContentfulPhotoSession.edges;
  return null;
}
