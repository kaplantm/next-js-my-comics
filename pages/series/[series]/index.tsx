import { allStaticComicsSeriesType } from "@lib/types";
import React from "react";
import { getSeriesTitles } from "@lib/utils/static-comic-file-manager/utils";
import ComicBody from "@page-containers/comic-body";
import ListIndex, {
  ComicListIndexProps,
} from "@page-containers/comic-list-index/index";
import getSingletonStaticComicFileManager from "@lib/utils/static-comic-file-manager";
import { getIssueRoute } from "@lib/constants/routes";

const SeriesPage = ({
  listData,
  ...rest
}: {
  listData: ComicListIndexProps["listData"];
  series: allStaticComicsSeriesType;
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
  const singletonStaticComicFileManager = await getSingletonStaticComicFileManager;
  const series = singletonStaticComicFileManager.comics[params.series];
  const listData = Object.values(series.issues).map(
    ({ params: comicParams, comic }) => ({
      link: {
        pathname: getIssueRoute(params.series, comicParams.issueNumber),
        name: comic.frontMatter.title,
      },
      comic,
    })
  );
  return {
    props: {
      params,
      series: series,
      listData,
    },
  };
}

export default SeriesPage;
