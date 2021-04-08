const getArguments = () => {
  const arguments = process.argv.slice(2);
  const [folder, maxDimension, maxSize] = arguments;
  if (!folder) {
    throw "Missing folder argument";
  }
  return [
    folder,
    parseInt(maxDimension) || defaultMaxDimension,
    parseInt(maxSize) || defaultMaxSize,
  ];
};

module.exports = { getArguments };
