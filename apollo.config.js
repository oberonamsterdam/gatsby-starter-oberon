module.exports = {
    client: {
        tagName: 'graphql',
        service: {
            name: 'gatsby',
            localSchemaFile: ['graphql.json'],
        },
        includes: ['src/**/*.{ts,tsx}', 'node_modules/gatsby-transformer-sharp/src/fragments.js'],
    },
};
