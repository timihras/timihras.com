require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Timi Hras',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    'gatsby-plugin-page-transitions',
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
}
