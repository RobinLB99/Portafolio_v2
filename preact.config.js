export default {
  publicPath: '/portfolio-v2/',
  prerender: {
    enabled: true,
    prerenderUrls: ['/'],
  },
  // eslint-disable-next-line no-unused-vars
  webpack: (config, { dev, isServer }) => {
    return config;
  }
}; 