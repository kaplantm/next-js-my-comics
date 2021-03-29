import { ComicType, mappedRouteType } from "@lib/types";
import React from "react";
import {
  getIssueData,
  getIssueNumbers,
  getSeriesData,
  getSeriesTitles,
} from "../../../src/lib/utils/static-generation-utils";
import ComicBody from "@page-containers/comic-body";
import ListIndex, { ListIndexProps } from "@page-containers/list-index";
import { getIssueRoute } from "@lib/constants/routes";

const SeriesPage = ({
  listData,
  ...rest
}: {
  listData: ListIndexProps["listData"];
  series: ComicType;
  params: { series: string; issueNumber: number };
}) => (
  <>
    <ComicBody {...rest} />
    <ListIndex listData={listData} headerLabel="Issues" />
  </>
);

export const getStaticPaths = async () => {
  const seriesTitles = await getSeriesTitles();
  const paths = seriesTitles.map((series) => ({ params: { series } }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({
  params,
}: {
  params: { series: string };
}) {
  const issueNumbers = await getIssueNumbers(params.series);
  const issuesData = await Promise.all(
    issueNumbers.map(async (issueNumber) => {
      const comic = await getIssueData(params.series, issueNumber);
      return {
        link: {
          pathname: getIssueRoute(params.series, issueNumber),
          name: `#${issueNumber} - ${comic.frontMatter.title}`,
        },
        comic,
      };
    })
  );
  return {
    props: {
      params,
      series: await getSeriesData(params.series),
      listData: issuesData,
    },
  };
}

export default SeriesPage;
