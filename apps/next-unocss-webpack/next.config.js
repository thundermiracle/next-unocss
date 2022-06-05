const UnoCSS = require("@unocss/webpack").default;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config, { dev }) => {
    config.plugins.push(UnoCSS());
    if (dev) {
      config.cache = false;
    }

    return config;
  },
};

module.exports = nextConfig;
