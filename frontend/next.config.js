const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias['react'] = path.resolve(__dirname, 'node_modules/react');
    return config;
  },
}

module.exports = nextConfig