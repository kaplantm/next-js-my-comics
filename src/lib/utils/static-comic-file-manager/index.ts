import { allStaticComicsType, allStaticPanelsType } from "@lib/types";
import { writeFileSync, readFileSync, existsSync } from "fs";
import {
  buildScratchAllComicsFilePath,
  buildScratchAllPanelsFilePath,
  getImagePaths,
  getIssueData,
  getIssueNumbers,
  getPanelCategories,
  getPanelsCategoryDirectory,
  getSeriesData,
  getSeriesTitles,
} from "./utils";

class StaticComicFileManager {
  comics: allStaticComicsType = {};
  panels: allStaticPanelsType = {};

  constructor() {}

  async _initialize() {
    this.comics = await this.getNewOrCached(
      buildScratchAllComicsFilePath,
      this.getAllComics.bind(this)
    );
    this.panels = await this.getNewOrCached(
      buildScratchAllPanelsFilePath,
      this.getAllPanels.bind(this)
    );
  }

  // We cache the built json in files in a scratch folder
  // So if we have them already, we don't need to go gathering them for every page
  // Instead we just read the objects from the saved file
  async getNewOrCached<T>(cachedFilePath, getter: () => Promise<T>) {
    if (existsSync(cachedFilePath)) {
      const newData = JSON.parse(
        readFileSync(cachedFilePath, {
          encoding: "utf8",
        })
      );
      return newData;
    }

    const newData = await getter();
    if (process.env.NODE_ENV !== "development") {
      writeFileSync(cachedFilePath, JSON.stringify(newData));
    }
    return newData;
  }

  async getAllPanels() {
    const categories = await getPanelCategories();
    return categories.reduce(async (acc, category) => {
      const newAcc = await acc;
      newAcc[category] = await getImagePaths(
        getPanelsCategoryDirectory(category)
      );
      return Promise.resolve(newAcc);
    }, Promise.resolve({}));
  }

  async getAllComics() {
    const seriesTitles = await getSeriesTitles();
    return await seriesTitles.reduce(async (acc, seriesTitle) => {
      const comic = await getSeriesData(seriesTitle);
      const newAcc = await acc;
      newAcc[seriesTitle] = {
        params: {
          series: seriesTitle,
        },
        comic,
        issues: await this.getAllIssuesInSeries(seriesTitle),
      };
      return Promise.resolve(newAcc);
    }, Promise.resolve({}));
  }

  async getAllIssuesInSeries(series: string) {
    const issueNumbersInSeries = await getIssueNumbers(series);
    return issueNumbersInSeries.reduce(async (acc, issueNumber) => {
      const comic = await getIssueData(series, issueNumber);
      const newAcc = await acc;
      newAcc[issueNumber] = {
        params: {
          series,
          issueNumber,
        },
        comic,
      };
      return Promise.resolve(newAcc);
    }, Promise.resolve({}));
  }
}

const getInitializedComicFileManager = async () => {
  const staticComicFileManager = new StaticComicFileManager();
  await staticComicFileManager._initialize();
  return staticComicFileManager;
};

export default getInitializedComicFileManager;
