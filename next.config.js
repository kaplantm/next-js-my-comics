const time = `${new Date().getTime()}`;

module.exports = {
  generateBuildId: async () => {
    return time;
  },
};
