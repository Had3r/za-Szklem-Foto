require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Za Szkłem',
    shortName: 'Za Szkłem',
    siteUrl: 'https://www.google.io/',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/assets/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        //  to use Tailwind CSS classes add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-resolve-src',
    `gatsby-plugin-playground`,
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: 0,
      },
    },
    // gatsby-plugin-purgecss should be AFTER other css/postcss plugins
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        ignore: [
          // PurgeCss was removing styles from packages like react-slick or react-medium-image-zoom during build,
          // causing the page to crash.
          // The solution comes from https://github.com/gatsbyjs/gatsby/issues/8188#issuecomment-455530292
          '/node_modules/slick-carousel/slick/slick.css',
          '/node_modules/slick-carousel/slick/slick-theme.css',
          '/node_modules/react-medium-image-zoom/dist/styles.css',
        ],
      },
    },
    // only for debugging:
    // {
    //   resolve: 'gatsby-plugin-webpack-bundle-analyzer',
    //   options: {
    //     analyzerPort: 3000,
    //     production: true,
    //   },
    // },
  ],
};
