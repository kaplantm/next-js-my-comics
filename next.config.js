const time = `${new Date().getTime()}`;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const config = {
  generateBuildId: async () => time,
  // https://nextjs.org/docs/api-reference/next.config.js/exportPathMap#adding-a-trailing-slash
  trailingSlash: true,
  experimental: {
    concurrentFeatures: true,
  },
};

module.exports = withBundleAnalyzer(config);
