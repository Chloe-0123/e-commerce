const withTM = require('next-transpile-modules')(['mysql2']);
const path = require('path');

module.exports = withTM({
  images: {
    domains: ['place-puppy.com'],
  },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
  eslint: { ignoreDuringBuilds: true }
});
