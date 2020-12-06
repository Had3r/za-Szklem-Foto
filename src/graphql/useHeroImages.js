import { graphql, useStaticQuery } from 'gatsby';

export default function useTestimonial() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpeg|jpg|gif|png)/" }
          absolutePath: { regex: "/.*/assets/optimized-images/hero.*/" }
        }
      ) {
        edges {
          node {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);
  return data.allFile.edges;
}
