const {
  getFilesFailingOptimizationCheck,
  getArguments,
  getImageFilePaths,
} = require("./utils");

async function init() {
  const [folder, maxDimension, maxSize] = getArguments();

  const filePaths = await getImageFilePaths(`${process.cwd()}${folder}`);
  const failingFiles = await getFilesFailingOptimizationCheck(
    filePaths,
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
