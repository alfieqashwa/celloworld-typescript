/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Celloworld',
    description: 'Alfie Qashwa Personal Site to Learn In Public.',
    siteUrl: 'https://www.alfieqashwa.me',
    author: {
      name: 'Alfie Qashwa',
      url: 'https://twitter.com/alfieqashwa',
      email: 'alfieqashwa@gmail.com',
    },
    social: {
      twitter: 'https://twitter.com/alfieqashwa',
      github: 'https://github.com/alfieqashwa',
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    'gatsby-plugin-mdx',
    `gatsby-plugin-theme-ui`,
  ],
}
