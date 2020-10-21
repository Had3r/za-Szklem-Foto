import { graphql, useStaticQuery } from 'gatsby';

export default function useOptimizedImage(fileName) {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: {
          extension: { regex: "/(jpeg|jpg|gif|png)/" }
          absolutePath: { regex: "/.*/assets/optimized-images.*/" }
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
  const selectedImg = data.allFile.edges.find(({ node }) => {
    return node.childImageSharp.fluid.src.endsWith(fileName);
  });
  try {
    return selectedImg.node.childImageSharp;
  } catch {
    throw new Error(
      `File with path that ends with ${fileName} was not found in assets/optimized-images/. Check your static files!`,
    );
  }
}
