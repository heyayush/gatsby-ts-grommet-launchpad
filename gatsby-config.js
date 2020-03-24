/* eslint-disable */
'use strict'

const siteConfig = require('./config.js')
const meta = siteConfig.siteMetadata
const manifest = siteConfig.manifest

module.exports = {
  siteMetadata: { ...meta },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `React`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: { ...manifest },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: ['/'],
      },
    },
  ],
}
