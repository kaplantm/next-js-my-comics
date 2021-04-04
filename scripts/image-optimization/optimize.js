const sharp = require("sharp");
const {
  getFilesFailingOptimizationCheck,
  optimizeFiles,
  getArguments,
} = require("./utils");

async function init() {
  const [folder, maxDimension, maxSize] = getArguments();
  const filePathsToOptimize = await getFilesFailingOptimizationCheck(
    folder,
    maxDimension,
    maxSize
  );
  if (!filePathsToOptimize.length) {
    console.log("All images pass optimization, no files to optimize");
    return;
  }
  const { optimizedFiles, notOptimizedFiles, bytesSaved } = await optimizeFiles(
    filePathsToOptimize,
    maxDimension,
    maxSize
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
