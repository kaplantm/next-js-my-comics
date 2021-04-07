import {
  getIssueNumbers,
  getSeriesTitles,
  getSeries,
  getIssue,
} from "@lib/utils/static-comics/utils";
import ComicBody from "@page-containers/comic-body";
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
  const series = await getSeries(params.series);
  const issue = await getIssue(params.series, params.issueNumber);

  return {
    props: {
      params,
      series,
      issue,
    },
  };
}

export default IssuePage;
