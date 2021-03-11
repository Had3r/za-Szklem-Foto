require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const meta = {
  title: 'Za Szkłem Fotografia',
  shortName: 'Za Szkłem Fotografia',
  description: 'Fotografia weselna, okolicznościowa, portretowa i inne',
  shortName: 'Za Szkłem',
  startUrl: `/`,
  backgroundColor: '#fff',
  themeColor: '#4995e1',
  display: `standalone`,
  siteUrl: 'https://www.zaSzklemFotografia.pl/',
  canonical: 'https://www.zaSzklemFotografia.pl/',
  mainIcon: `static/icons/logo.png`,
};

module.exports = {
  siteMetadata: {
    ...meta,
  },
  plugins: [
    `gatsby-plugin-react-head`,
    'gatsby-plugin-optimize-svgs',
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-no-index`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: meta.title,
        short_name: meta.shortName,
        start_url: meta.startUrl,
        background_color: meta.backgroundColor,
        theme_color: meta.themeColor,
        display: meta.display,
        icon: meta.mainIcon,
        icons: [
          {
            src: `static/icons/android-icon-48x48.png`,
            sizes: '48x48',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: `static/icons/android-icon-72x72.png`,
            sizes: '72x72',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: `static/icons/android-icon-96x96.png`,
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: `static/icons/apple-icon-144x144.png`,
            sizes: '144x144',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: `static/icons/apple-icon-152x152.png`,
            sizes: '152x152',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: `static/icons/apple-icon-180x180.png`,
            sizes: '180x180',
            type: 'image/png',
            purpose: 'any maskable',
          },
          {
            src: `static/icons/splash-screen-icon-768x512.png`,
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
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
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'pl',
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
    'gatsby-plugin-resolve-src',
    `gatsby-plugin-playground`,
    'gatsby-plugin-testing',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -50,
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
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 3000,
        production: true,
        disable: !process.env.ANALYZE_BUNDLE_SIZE,
        generateStatsFile: true,
        analyzerMode: 'static',
      },
    },
  ],
};
