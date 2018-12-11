module.exports = {
  siteMetadata: {
    title: 'starstreak.net | Home is where the star is (tm)',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'starstreak.net',
        short_name: 'starstreak',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/starstreak-512x512.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-react-svg',
//    'gatsby-plugin-svg',
    'gatsby-plugin-netlify'
  ],
}
