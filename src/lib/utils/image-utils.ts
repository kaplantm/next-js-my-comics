// image_widthxheight.png
export const getWidthHeightFromImagePath = (fileName: string) => {
  const [width, height] = fileName
    .split("_")
    .slice(-1)[0]
    .split(".")[0]
    .split("x");
  return {
    width: parseInt(width),
    height: parseInt(height),
  };
};

export const getScaledImageWidthHeight = (
  fileName: string,
  maxScaledWidth: number,
  maxScaledHeight: number,
  downscaleFactor = 1
) => {
  const downsizedMaxScaledWidth = downscaleFactor * maxScaledWidth;
  const downsizedMaxScaledHeight = downscaleFactor * maxScaledHeight;
  const { width, height } = getWidthHeightFromImagePath(fileName);

  const scale =
    width && height
      ? Math.min(
          downsizedMaxScaledWidth / width,
          downsizedMaxScaledHeight / height
        )
      : null;
  const scaledWidth = scale ? width * scale : downsizedMaxScaledWidth;
  const scaledHeight = scale ? height * scale : downsizedMaxScaledHeight;

  return {
    width: scaledWidth,
    height: scaledHeight,
  };
};
