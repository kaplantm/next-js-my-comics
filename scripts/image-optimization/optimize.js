const {
  getFilesFailingOptimizationCheck,
  optimizeFiles,
  getArguments,
  renameFilesToIncludeDimensions,
  getImageFilePaths,
} = require("./utils");

async function init() {
  const [folder, maxDimension, maxSize] = getArguments();

  const filePaths = await getImageFilePaths(`${process.cwd()}${folder}`);
  const newFilePaths = await renameFilesToIncludeDimensions(filePaths);

  const filePathsToOptimize = await getFilesFailingOptimizationCheck(
    newFilePaths,
    folder,
    maxDimension,
    maxSize
  );
  if (!filePathsToOptimize.length) {
    console.log("All images pass optimization.");
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
