const sharp = require("sharp");
const { resolve } = require("path");
const { readdir, stat, readFile } = require("fs").promises;

const defaultMaxDimension = 1500; // TODO: flag
const defaultMaxSize = 0.8 * 1000 * 1000; // in bytes TODO: flag

// TODO: handle filenames w/ spacing like in original?
const imageOpDir = `${process.cwd()}/scripts/image-optimization/`;

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
// https://stackoverflow.com/a/45130990
async function getFilePaths(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFilePaths(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}

async function getFilesFailingOptimizationCheck(
  folder,
  maxDimension = defaultMaxDimension,
  maxSize = defaultMaxSize
) {
  const filePaths = await getFilePaths(`${process.cwd()}${folder}`);

  const failingFiles = (
    await Promise.all(
      filePaths.map(async (filePath) => {
        const isImage =
          filePath.endsWith(".png") ||
          filePath.endsWith(".jpg") ||
          filePath.endsWith(".jpeg");
        if (!isImage) {
          return null;
        }
        const { size } = await stat(filePath);

        if (size > maxSize) {
          return filePath;
        }
        const { width, height } = await sharp(filePath).metadata();
        if (width > maxDimension || height > maxDimension) {
          return filePath;
        }
        return null;
      })
    )
  ).filter((file) => file);

  return failingFiles;
}

async function getOptimizedImage(image, width, height, quality) {
  return image
    .resize({ width, height, fit: sharp.fit.contain })
    .png({ quality })
    .jpeg({ quality });
}

const getNewWidthHeight = (width, height, maxDimension) => {
  const widthIsMoreThanHeight = width > height;
  const newWidth =
    width > maxDimension && widthIsMoreThanHeight ? maxDimension : undefined;
  const newHeight =
    height > maxDimension && !widthIsMoreThanHeight ? maxDimension : undefined;
  return { width: newWidth, height: newHeight };
};

async function optimizeFiles(
  filePaths,
  maxDimension = defaultMaxDimension,
  maxSize = defaultMaxSize
) {
  const optimizedFiles = [];
  const notOptimizedFiles = [];
  let bytesSaved = 0;
  await Promise.all(
    filePaths.map(async (filePath) => {
      try {
        // Using fileBuffer to avoid "Error: Cannot use same file for input and output"
        const fileBuffer = await readFile(filePath);
        const image = sharp(fileBuffer);
        const { width, height } = await image.metadata();
        const newDimensions = getNewWidthHeight(width, height, maxDimension);
        const { size } = await stat(filePath);

        console.log({ newDimensions, width, height });
        let quality = size > maxSize ? 75 : 90;
        let optimizationDone = false;
        while (!optimizationDone) {
          const newImage = await getOptimizedImage(
            image,
            newDimensions.width,
            newDimensions.height,
            quality
          );
          const newImageBuffer = await newImage.toBuffer();
          const newImageSize = Buffer.byteLength(newImageBuffer);
          if (newImageSize < maxSize || quality < 50) {
            optimizationDone = true;
            await newImage.toFile(filePath);
          } else {
            quality -= 10;
          }
        }
        const { size: newSize } = await stat(filePath);

        bytesSaved += size - newSize;
        optimizedFiles.push(filePath);
      } catch (e) {
        console.log("e", e);
        notOptimizedFiles.push(filePath);
      }
    })
  );
  return {
    optimizedFiles,
    notOptimizedFiles,
    bytesSaved,
  };
}

module.exports = {
  optimizeFiles,
  getFilesFailingOptimizationCheck,
  getArguments,
};
