const path = require('path');
require('dotenv').config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
  },
  publicRuntimeConfig: {},
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'localhost',
      'res.cloudinary.com',
      'inneedstore.com',
      'i0.wp.com',
      'images.pexels.com',
    ],
  },

  webpack: (config, { isServer }) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['public'] = path.join(__dirname, 'public');

    return config;
  },
};
