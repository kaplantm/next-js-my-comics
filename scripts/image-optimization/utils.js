const sharp = require("sharp");
const { resolve } = require("path");
const { readdir, stat, readFile, rename } = require("fs").promises;

// TODO: move these into typescript if they arent gonna be run in node anymore

const defaultMaxDimension = 1500; // TODO: flag
const defaultMaxSize = 0.8 * 1000 * 1000; // in bytes TODO: flag
const cwd = process.cwd();

const removeLocalPublicPath = (path) => path.split(`${cwd}/public`)[1];

// https://stackoverflow.com/a/45130990
async function getFilePaths(dir) {
  const directories = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    directories.map((dirent) => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFilePaths(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}

async function getImageFilePaths(dir) {
  const files = await getFilePaths(dir);

  return files.filter((file) => {
    const lowerFilePath = file.toLowerCase();
    return (
      lowerFilePath.endsWith(".png") ||
      lowerFilePath.endsWith(".jpg") ||
      lowerFilePath.endsWith(".jpeg")
    );
  });
}

const fileNameEndsWithDimensionsRegex = /(_\d*x\d*)$/i;
async function renameFilesToIncludeDimensions(filePaths) {
  return Promise.all(
    filePaths.map(async (filePath) => {
      const splitName = filePath.split(".");
      const fileType = splitName[splitName.length - 1];
      const withoutFileType = splitName.slice(0, -1).join("");

      const fileNameEndsWithDimensions = fileNameEndsWithDimensionsRegex.test(
        withoutFileType
      );
      if (fileNameEndsWithDimensions) {
        return filePath;
      }
      const image = sharp(filePath);
      const { width, height } = await image.metadata();
      const newFilePath = `${withoutFileType}_${width}x${height}.${fileType}`;

      await rename(filePath, newFilePath);
      return newFilePath;
    })
  );
}

async function getFilesFailingOptimizationCheck(
  filePaths,
  folder,
  maxDimension = defaultMaxDimension,
  maxSize = defaultMaxSize
) {
  const failingFiles = (
    await Promise.all(
      filePaths.map(async (filePath) => {
        const lowerFilePath = filePath.toLowerCase();
        const isImage =
          lowerFilePath.endsWith(".png") ||
          lowerFilePath.endsWith(".jpg") ||
          lowerFilePath.endsWith(".jpeg");
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

export async function optimize(folder, maxDimension, maxSize) {
  const filePaths = await getImageFilePaths(`${cwd}${folder}`);
  const newFilePaths = await renameFilesToIncludeDimensions(filePaths);

  const filePathsToOptimize = await getFilesFailingOptimizationCheck(
    newFilePaths,
    folder,
    maxDimension,
    maxSize
  );

  if (!filePathsToOptimize.length) {
    console.log("All images pass optimization.");
    console.log({ newFilePaths, cwd });
    return {
      filePaths: newFilePaths.map(removeLocalPublicPath),
      bytesSaved: 0,
    };
  }
  const { optimizedFiles, notOptimizedFiles, bytesSaved } = await optimizeFiles(
    newFilePaths,
    maxDimension,
    maxSize
  );
  if (optimizedFiles.length) {
    console.log("Optimized images", { optimizedFiles, filePathsToOptimize });
  }
  if (notOptimizedFiles.length) {
    console.log("Failed to optimize images", notOptimizedFiles);
  }
  console.log(`Saved ${(bytesSaved / 1000000).toFixed(2)}MB`);
  return {
    filePaths: [...optimizedFiles, ...notOptimizedFiles].map(
      removeLocalPublicPath
    ),
    bytesSaved,
  };
}

module.exports = {
  optimizeFiles,
  getFilesFailingOptimizationCheck,
  renameFilesToIncludeDimensions,
  getImageFilePaths,
  optimize,
};
