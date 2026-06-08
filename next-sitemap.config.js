/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.mktweb360.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
};
