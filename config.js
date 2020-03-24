/* eslint-disable */
'use strict'

const activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || 'development'

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: 'gatsby-ts-grommet-starter Title',
    description: 'gatsby-ts-grommet-starter description.',
    author: 'Ayush Sharma',
    favicon: '/logo.jpg',
  },
  siteManifest: {
    name: 'gatsby-ts-grommet-starter',
    short_name: 'gatsby-ts-grommet-starter',
    description: 'gatsby-ts-grommet-starter description.',
    start_url: '/',
    background_color: '#0b67a5',
    theme_color: '#0b67a5',
    display: 'standalone',
    lang: 'en',
    icon: 'static/logo.jpg',
  },
  googleAnalyticsId: process.env.GOOGLE_ANALYTICS,
}
