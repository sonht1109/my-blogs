/** @type {import('next').NextConfig} */
const nextConfig = {
  // i18n: {
  //   locales: ["en", "vi"],
  //   defaultLocale: "en",
  //   localeDetection: false,
  // },
};

module.exports = require('nextra')({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.js",
})(nextConfig);
