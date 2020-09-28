module.exports = {
  siteMetadata: {
    title: ``,
    description: ``,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-resolve-src',
    // gatsby-plugin-purgecss should be AFTER other css/postcss plugins
    `gatsby-plugin-purgecss`,
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    //   options: {
    //     analyzerPort: 3000,
    //     production: true,
    //   },
    // },
  ],
};
