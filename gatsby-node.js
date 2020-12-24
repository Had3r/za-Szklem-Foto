const path = require('path');

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig();
  config.node = {
    fs: 'empty',
  };
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      featuredWorks: allContentfulFeaturedWorks {
        edges {
          node {
            slug
            shortDescription
            id
            image {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);
  result.data.featuredWorks.edges.forEach(({ node }) => {
    createPage({
      path: `/wybrane-realizacje/${node.slug}`,
      component: path.resolve(`src/templates/gallery-template.js`),
      context: {
        slug: node.slug,
      },
    });
  });
};
