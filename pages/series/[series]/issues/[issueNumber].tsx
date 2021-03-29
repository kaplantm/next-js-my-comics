import {
  getSeriesData,
  getIssueData,
  getIssueNumbers,
  getSeriesTitles,
} from "../../../../src/lib/utils/static-generation-utils";
import ComicBody from "../../../../src/page-containers/comic-body";
import React from "react";

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
    fallback: true,
  };
};

export async function getStaticProps({
  params,
}: {
  params: { series: string; issueNumber: number };
}) {
  return {
    props: {
      params,
      series: await getSeriesData(params.series),
      issue: await getIssueData(params.series, params.issueNumber),
    },
  };
}

export default IssuePage;
