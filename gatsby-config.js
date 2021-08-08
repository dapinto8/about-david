require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.example.com',
    title: 'About David',
    description: "David's website",
    author: '@dapinto8'
  },
  flags: {
    DEV_SSR: true,
    FAST_DEV: true
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID
      }
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Nunito:300,400,500,700'],
        display: 'swap'
      }
    },
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-react-helmet-canonical-urls',
      options: {
        siteUrl: 'https://www.example.com'
      }
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png'
      }
    },
    {
      resolve: 'gatsby-plugin-image',
      options: {
        quality: 100
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/'
      },
      __key: 'images'
    }
  ]
};
