require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(`>>> env`, process.env.NODE_ENV, process.env.AIRTABLE_API_KEY)

module.exports = {
  siteMetadata: {
    title: `Climate Angel`,
    description: `Onboarding the next generation of climate angels who are builing a cleaner more prosperous planet.`,
    author: `Jason Laster`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: `appd8u2wrVPQVl7R4`,
            tableName: `Angels`,
            tableView: `List`,
            mapping: { Attachments: `fileNode` },
            tableLinks: [],
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
