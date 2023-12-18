/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = require("nextra")({
  theme: "nextra-theme-blog",
  themeConfig: "./theme.config.jsx",
})(nextConfig);
