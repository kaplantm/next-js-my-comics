const sharp = require("sharp");
const { resolve } = require("path");
const { readdir, stat, readFile } = require("fs").promises;

const maxDimension = 1500; // TODO: flag
const maxSize = 0.8 * 1000 * 1000; // in bytes TODO: flag

// TODO: handle filenames w/ spacing like in original?
const imageOpDir = `${process.cwd()}/scripts/image-optimization/`;

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

async function getFilesFailingOptimizationCheck(folder) {
  const filePaths = await getFilePaths(folder);

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

async function getOptimizedImage(image, newWidth, newHeight, quality) {
  return image.resize(newWidth, newHeight).png({ quality }).jpeg({ quality });
}

async function optimizeFiles(filePaths) {
  const optimizedFiles = [];
  const notOptimizedFiles = [];
  let bytesSaved = 0;
  await Promise.all(
    filePaths.map(async (filePath) => {
      try {
        // Using fileBuffer to avoid "Error: Cannot use same file for input and output"
        const fileBuffer = await readFile(filePath);
        const image = sharp(fileBuffer);
        const metaData = await image.metadata();
        const newWidth =
          metaData.width > maxDimension ? maxDimension : undefined;
        const newHeight =
          metaData.height > maxDimension ? maxDimension : undefined;
        const { size } = await stat(filePath);

        let quality = size > maxSize ? 75 : 100;
        let optimizationDone = false;
        while (!optimizationDone) {
          console.log({ quality });
          const newImage = await image
            .resize(newWidth, newHeight)
            .png({ quality })
            .jpeg({ quality });
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
        console.log({ bytesSaved, size, newSize, maxSize });
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

module.exports = { optimizeFiles, getFilesFailingOptimizationCheck };
