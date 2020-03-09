# oberon-gatsby-starter

This is a starter kit for [Gatsby.js](https://www.gatsbyjs.org/) websites written in TypeScript.
It leverages [GraphQL Code Generator](https://graphql-code-generator.com/) to enable typesafe GraphQL queries.

## Features

- Type safety with [TypeScript](https://www.typescriptlang.org/)
- Typesafe GraphQL with [graphql-codegen](https://graphql-code-generator.com/)
- [ESLint](https://eslint.org/) with [TypeScript support](https://typescript-eslint.io/)
- Styling with [styled-components](https://styled-components.com/)
- Formatting with [prettier](https://prettier.io/)

## Setup

Install the Gatsby CLI

```bash
yarn global add gatsby-cli
```

or

```bash
npm install -g gatsby-cli
```

Create a new site

```bash
gatsby new <PROJECT_NAME> https://github.com/oberonamsterdam/gatsby-starter-oberon
```

Husky

Because of [this](https://github.com/gatsbyjs/gatsby/issues/19589) we need to install husky manually after running `gatsby new`

```
npm install husky --save-dev
```

## Usage


### Configure env
Copy .env.dist to .env. \
Modify if necessary.

Start

```bash
npm start
```

Create a production build

```bash
npm run build
```

Serve the production build locally

```bash
npm run serve
```

Generate GraphQL type definitions

```bash
npm run codegen
```

## Deploying
For specific Oberon deployment steps you can visit the [papyrs guide](https://oberon.papyrs.com/frontend-devops)
