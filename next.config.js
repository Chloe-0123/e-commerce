const withTM = require('next-transpile-modules')(['mysql2']);

module.exports = withTM({
  images: {
    domains: ['place-puppy.com'],
  },
});
