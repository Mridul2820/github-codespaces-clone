const path = require('path');
require('dotenv').config();

module.exports = {
  env: {},
  publicRuntimeConfig: {},
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['localhost', 'res.cloudinary.com', 'github.githubassets.com'],
  },

  webpack: (config) => {
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['public'] = path.join(__dirname, 'public');
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
