const { getFilesFailingOptimizationCheck } = require("./utils");

async function init() {
  const arguments = process.argv.slice(2);
  const folder = arguments[0];
  if (!folder) {
    throw "Missing folder argument";
  }
  const failingFiles = await getFilesFailingOptimizationCheck(folder);
  if (failingFiles.length) {
    console.warn("Image file(s) too large \n", failingFiles);
  } else {
    console.warn("All images pass");
  }
}

init();
