// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://chainedassets.com/',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 7000,
  exclude: [],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
