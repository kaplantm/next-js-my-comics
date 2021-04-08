import React from "react";
import {
  getIssue,
  getSeriesTitles,
  getIssueNumbers,
} from "@lib/utils/static-comics/utils";
import DebugAddComic from "@page-containers/debug-add-comic";
import { ComicPageParams } from "@lib/types";

const DebugEditComicPage = (props) => <DebugAddComic {...props} editMode />;

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
  const issue = await getIssue(params.series, params.issueNumber);

  return {
    props: {
      params,
      issue,
    },
  };
}
export default DebugEditComicPage;
