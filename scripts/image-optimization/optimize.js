const sharp = require("sharp");
const { getFilesFailingOptimizationCheck, optimizeFiles } = require("./utils");

async function init() {
  const arguments = process.argv.slice(2);
  const folder = arguments[0];
  if (!folder) {
    throw "Missing folder argument";
  }
  const filePathsToOptimize = await getFilesFailingOptimizationCheck(folder);
  if (!filePathsToOptimize.length) {
    console.log("All images pass optimization, no files to optimize");
    return;
  }
  const { optimizedFiles, notOptimizedFiles, bytesSaved } = await optimizeFiles(
    filePathsToOptimize
  );
  if (optimizedFiles.length) {
    console.log("Optimized images", optimizedFiles);
  }
  if (notOptimizedFiles.length) {
    console.log("Failed to optimize images", notOptimizedFiles);
  }
  console.log(`Saved ${(bytesSaved / 1000000).toFixed(2)}MB`);
}

init();
