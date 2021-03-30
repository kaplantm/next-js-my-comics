import { allStaticComicsType } from "@lib/types";
import {
  getIssueData,
  getIssueNumbers,
  getSeriesData,
  getSeriesTitles,
} from "./utils";

class StaticComicFileManager {
  initializationPromise = null;
  comics: allStaticComicsType = {};

  constructor() {}

  async _doInitialize() {
    this.comics = await this.getAllComics();
  }

  async _initialize() {
    // prevent concurrent calls firing initialization more than once
    if (!this.initializationPromise) {
      this.initializationPromise = this._doInitialize();
    }
    return this.initializationPromise;
  }

  async getAllComics() {
    const seriesTitles = await getSeriesTitles();
    return seriesTitles.reduce(async (acc, seriesTitle) => {
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

const getSingletonStaticComicFileManager = (async () => {
  const staticComicFileManager = new StaticComicFileManager();
  await staticComicFileManager._initialize();
  return staticComicFileManager;
})();

export default getSingletonStaticComicFileManager;
