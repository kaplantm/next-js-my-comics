import { promises as fs } from "fs";
import path from "path";
import { safeLoadFront } from "yaml-front-matter";

const dataFileName = "data.md";
const coverFileName = "cover";
const possibleCoverFiles = [
  `${coverFileName}.png`,
  `${coverFileName}.jpg`,
  `${coverFileName}.jpeg`,
];
const omittedFiles = [".DS_Store"];

const baseDirectory = path.join(process.cwd(), "public/static");
const basePanelsDirectory = `${baseDirectory}/panels`;
const baseSeriesDirectory = `${baseDirectory}/series`;
const readingOrderFilePath = `${baseDirectory}/reading-order.json`;

const getSeriesDirectory = (series: string) =>
  `${baseSeriesDirectory}/${series}`;
const getIssuesDirectory = (series: string) =>
  `${getSeriesDirectory(series)}/issues`;
const getIssueDirectory = (series: string, issue: number) =>
  `${getSeriesDirectory(series)}/issues/${issue}`;
export const getPanelsCategoryDirectory = (category: string) =>
  `${basePanelsDirectory}/${category}`;
const getImagesDirectory = (intialDirectory: string) =>
  `${intialDirectory}/images`;

const getFileNamesInDirectory = async (
  directory: string,
  omissions = omittedFiles
) => {
  try {
    const files = (await fs.readdir(directory)) || [];
    return files.filter((file) => !omissions.includes(file));
  } catch (e) {
    return [];
  }
};
const getMarkdownFilePathInDirectory = (directory: string) =>
  `${directory}/${dataFileName}`;
const readFile = async (filePath: string) => fs.readFile(filePath, "utf8");

const removeLocalPath = (directory: string) => directory.split("public")[1];
const getCoverPath = async (directory: string) => {
  const fileNames = await getFileNamesInDirectory(directory);
  const foundCoverFileName =
    fileNames.find((element) => possibleCoverFiles.includes(element)) || null;
  return foundCoverFileName
    ? `${removeLocalPath(directory)}/${foundCoverFileName}`
    : null;
};

export const getImagePaths = async (directory: string) => {
  try {
    const imagesDirectory = getImagesDirectory(directory);
    const fileNames = await getFileNamesInDirectory(imagesDirectory);
    return fileNames
      .filter(
        (fileName) =>
          fileName.endsWith(".png") ||
          fileName.endsWith(".jpg") ||
          fileName.endsWith(".jpeg")
      )
      .map((fileName) => `${removeLocalPath(imagesDirectory)}/${fileName}`);
  } catch (e) {
    return [];
  }
};

const getParsedMarkdownFile = async (
  directory: string,
  fileLabel: string
): Promise<{ description: string; frontMatter: any }> => {
  try {
    const markdownFilePath = getMarkdownFilePathInDirectory(directory);
    const markdownFileData = await readFile(markdownFilePath);
    if (!markdownFileData) {
      return { description: null, frontMatter: null };
    }
    const { __content: description, ...frontMatter } = safeLoadFront(
      markdownFileData,
      {
        json: true,
        filename: fileLabel,
      }
    );
    return {
      description: description || null,
      frontMatter: frontMatter || null,
    };
  } catch (e) {
    return { description: null, frontMatter: null };
  }
};

export const getSeriesTitles = async () =>
  getFileNamesInDirectory(baseSeriesDirectory);
export const getIssueNumbers = async (seriesTitle: string) => {
  const issuesDirectory = getIssuesDirectory(seriesTitle);

  // We expect issue numbers to be numbers
  return ((await getFileNamesInDirectory(
    issuesDirectory
  )) as any[]) as number[];
};
export const getPanelCategories = async () =>
  getFileNamesInDirectory(basePanelsDirectory);

export const getSeriesData = async (
  seriesTitle: string
): Promise<{
  description: string;
  frontMatter: any;
  coverPath: string;
  imagePaths: string[];
}> => {
  const seriesDirectory = getSeriesDirectory(seriesTitle);
  const parsedData = await getParsedMarkdownFile(seriesDirectory, seriesTitle);

  return {
    ...parsedData,
    coverPath: await getCoverPath(seriesDirectory),
    imagePaths: await getImagePaths(seriesDirectory),
  };
};

export const getIssueData = async (
  seriesTitle: string,
  issueNumber: number
): Promise<{
  description: string;
  frontMatter: any;
  coverPath: string;
  imagePaths: string[];
}> => {
  const issueDirectory = getIssueDirectory(seriesTitle, issueNumber);
  const parsedData = await getParsedMarkdownFile(
    issueDirectory,
    `${seriesTitle}-${issueNumber}`
  );

  return {
    ...parsedData,
    coverPath: await getCoverPath(issueDirectory),
    imagePaths: await getImagePaths(issueDirectory),
  };
};

export const getReadingOrder = async (): Promise<string[]> => {
  const fileData = await readFile(readingOrderFilePath);
  return JSON.parse(fileData);
};
