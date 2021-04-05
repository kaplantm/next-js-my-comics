const { getFilesFailingOptimizationCheck, getArguments } = require("./utils");

async function init() {
  const [folder, maxDimension, maxSize] = getArguments();
  const failingFiles = await getFilesFailingOptimizationCheck(
    folder,
    maxDimension,
    maxSize
  );
  if (failingFiles.length) {
    console.warn("Image file(s) too large \n", failingFiles);
  } else {
    console.warn("All images pass");
  }
}

init();