import {
  getSeriesData,
  getIssueData,
  getIssueNumbers,
  getSeriesTitles,
} from "@lib/utils/static-comic-file-manager/utils";
import ComicBody from "@page-containers/comic-body";
import getSingletonStaticComicFileManager from "@lib/utils/static-comic-file-manager";
import React from "react";
import { ComicPageParams } from "@lib/types";

// TODO: right arrow - next in series
// TODO: down arrow - next in reading order
const IssuePage = (props) => <ComicBody {...props} />;

export const getStaticPaths = async () => {
  const seriesTitles = await getSeriesTitles();
  const paths = (
    await Promise.all(
      seriesTitles.map(async (series) => {
        const issueNumbers = await getIssueNumbers(series);
        return issueNumbers.map((issueNumber) => ({
          params: { series, issueNumber },
        }));
      })
    )
  ).flat();

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: { params: ComicPageParams }) {
  const singletonStaticComicFileManager = await getSingletonStaticComicFileManager;
  const series = singletonStaticComicFileManager.comics[params.series];

  return {
    props: {
      params,
      series,
      issue: series.issues[params.issueNumber],
    },
  };
}

export default IssuePage;
