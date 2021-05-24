import { isAOneShot } from '@lib/constants';
import { getIssueRoute, getSeriesRoute } from '@lib/constants/routes';
import { ComicWithMetadata } from '@lib/types';
import { promises, mkdirSync, existsSync } from 'fs';
import path from 'path';
import { safeLoadFront } from 'yaml-front-matter';
import { insert } from '../string-utils';

const dataFileName = 'data.md';
const omittedFiles = ['.DS_Store'];

const baseDirectory = path.join(process.cwd(), 'public/static');
const basePanelsDirectory = `${baseDirectory}/panels`;
const baseSeriesDirectory = `${baseDirectory}/series`;
const readingOrderFilePath = `${baseDirectory}/reading-order.json`;

export const getSeriesDirectory = (series: string) =>
  `${baseSeriesDirectory}/${series}`;
const getIssuesDirectory = (series: string) =>
  `${getSeriesDirectory(series)}/issues`;
export const getIssueDirectory = (series: string, issue: number | string) =>
  `${getSeriesDirectory(series)}/issues/${issue}`;
export const getPanelsCategoryDirectory = (category: string) =>
  `${basePanelsDirectory}/${category}`;
export const getImagesDirectory = (intialDirectory: string) =>
  `${intialDirectory}/images`;

const getFileNamesInDirectory = async (
  directory: string,
  omissions = omittedFiles
) => {
  try {
    const files = (await promises.readdir(directory)) || [];
    return files.filter(file => !omissions.includes(file));
  } catch (e) {
    return [];
  }
};
const getMarkdownFilePathInDirectory = (directory: string) =>
  `${directory}/${dataFileName}`;
const readFile = async (filePath: string) =>
  promises.readFile(filePath, 'utf8');

export const getImagePaths = async (directory: string): Promise<string[]> => {
  const fileName = `${directory}/images.json`;
  if (!existsSync(fileName)) {
    return [];
  }
  try {
    const images = JSON.parse(await readFile(fileName));
    const img = images.map(image => `${process.env.S3_CDN_URL}/${image}`);
    return img;
  } catch (e) {
    console.log('getImagePaths', e);
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

  return getFileNamesInDirectory(issuesDirectory);
};
export const getPanelCategories = async () =>
  getFileNamesInDirectory(basePanelsDirectory);

const getSeriesData = async (
  seriesTitle: string
): Promise<{
  description: string;
  frontMatter: any;
  coverPath: string;
  imagePaths: string[];
}> => {
  const seriesDirectory = getSeriesDirectory(seriesTitle);
  const parsedData = await getParsedMarkdownFile(seriesDirectory, seriesTitle);

  const [coverPath, ...imagePaths] = await getImagePaths(seriesDirectory);
  return {
    ...parsedData,
    coverPath: coverPath || null,
    imagePaths,
  };
};

const getIssueData = async (
  seriesTitle: string,
  issueNumber: number | string
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
  const [coverPath, ...imagePaths] = await getImagePaths(issueDirectory);

  return {
    ...parsedData,
    coverPath: coverPath || null,
    imagePaths,
  };
};

export const getReadingOrder = async (): Promise<string[]> => {
  const fileData = await readFile(readingOrderFilePath);
  const parsedData: { [key: string]: string[] } = JSON.parse(fileData);
  return Object.values(parsedData).flat();
};

export async function getPanelsInCategory(category: string): Promise<string[]> {
  return getImagePaths(getPanelsCategoryDirectory(category));
}

export async function getIssue(
  series: string,
  issueNumber: string
): Promise<ComicWithMetadata> {
  const comic = await getIssueData(series, issueNumber);
  if (!comic?.frontMatter) {
    throw new Error(`Failed to build issue: ${series}-${issueNumber}`);
  }

  const issueNumberIsInt = parseInt(issueNumber);
  const formattedIssueNumber = issueNumberIsInt
    ? `#${issueNumber}`
    : insert(issueNumber, issueNumber.search(/\d/), '#');
  return {
    params: {
      series,
      issueNumber,
    },
    link: {
      pathname: getIssueRoute(series, issueNumber),
      name: `${isAOneShot(series) ? '' : `${formattedIssueNumber} - `}${
        comic.frontMatter.title
      }`,
    },
    comic,
  };
}

async function getAllIssuesInSeries(
  series: string
): Promise<{ [key: number]: ComicWithMetadata }> {
  const issueNumbersInSeries = await getIssueNumbers(series);
  return issueNumbersInSeries.reduce(async (acc, issueNumber) => {
    const newAcc = await acc;
    newAcc[issueNumber] = await getIssue(series, issueNumber);
    return Promise.resolve(newAcc);
  }, Promise.resolve({}));
}

export async function getSeries(
  seriesTitle: string,
  includeIssues?: boolean
): Promise<ComicWithMetadata> {
  const comic = await getSeriesData(seriesTitle);
  if (!comic?.frontMatter) {
    throw new Error(`Failed to build seriesTitle: ${seriesTitle}`);
  }
  return {
    params: {
      series: seriesTitle,
    },
    link: {
      pathname: getSeriesRoute(seriesTitle),
      name: comic.frontMatter.title,
    },
    comic,
    issues: includeIssues ? await getAllIssuesInSeries(seriesTitle) : [],
  };
}

export async function getAllSeries(
  includeIssues?: boolean
): Promise<{ [key: string]: ComicWithMetadata }> {
  const seriesTitles = await getSeriesTitles();
  return seriesTitles.reduce(async (acc, seriesTitle) => {
    const newAcc = await acc;
    // TODO: update types w/ link
    newAcc[seriesTitle] = await getSeries(seriesTitle, includeIssues);
    return Promise.resolve(newAcc);
  }, Promise.resolve({}));
}

export function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (existsSync(dirname)) {
    return;
  }
  ensureDirectoryExistence(dirname);
  mkdirSync(dirname);
}
