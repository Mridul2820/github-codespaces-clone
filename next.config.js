const path = require('path');
require('dotenv').config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  publicRuntimeConfig: {},
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['localhost', 'res.cloudinary.com'],
  },
  exportPathMap: function () {
    return {
      '/locales/de-DE/summer-dress-f': {
        page: '/locales/[locale]/[slug]',
        query: { locale: 'de-DE', slug: 'summer-dress-f' },
      },
    };
  },

  webpack: (config) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['public'] = path.join(__dirname, 'public');

    return config;
  },
};
