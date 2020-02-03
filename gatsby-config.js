module.exports = {
    siteMetadata: {
        title: `Oberon | Online platformen op maat`,
        description: `Wij maken de wereld mooier, makkelijker en overzichtelijker`,
        author: `Oberon`,
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        // TODO: implement the source
        // {
        //     resolve: 'gatsby-source-graphql',
        //     options: gqlOptions,
        // },
        // {
        //     resolve: 'gatsby-plugin-graphql-preview',
        //     options: gqlOptions,
        // },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#000000`,
                theme_color: `#000000`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
