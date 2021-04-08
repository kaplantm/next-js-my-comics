const { optimize } = require("./utils");
const { getArguments } = require("./get-arguments");

async function init() {
  const [folder, maxDimension, maxSize] = getArguments();
  await optimize(folder, maxDimension, maxSize);
}

init();
