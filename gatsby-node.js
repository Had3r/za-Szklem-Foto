const path = require('path');

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  // Hack due to Tailwind ^1.1.0 using `reduce-css-calc` which assumes node
  // https://github.com/bradlc/babel-plugin-tailwind-components/issues/39#issuecomment-526892633
  const config = getConfig();
  config.node = {
    fs: 'empty',
  };
};

// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const result = await graphql(`
//     {
//       sessionData: allContentfulPhotoSession {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `);
//   result.data.sessionData.edges.forEach(({ node }) => {
//     createPage({
//       path: `/galeria/${node.slug}`,
//       component: path.resolve(`src/templates/gallery-template.js`),
//       context: {
//         // variable passed form gatsby node to other query
//         slug: node.slug,
//       },
//     });
//   });
// };
