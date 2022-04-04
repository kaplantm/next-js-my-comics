const time = `${new Date().getTime()}`;

module.exports = {
  generateBuildId: async () => {
    return time;
  },
  // https://nextjs.org/docs/api-reference/next.config.js/exportPathMap#adding-a-trailing-slash
  trailingSlash: true,
  experimental: {
    concurrentFeatures: true,
  },
};
