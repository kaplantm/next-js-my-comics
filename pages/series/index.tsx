import React from "react";
import ListIndex from "@page-containers/list-index";
import {
  getSeriesData,
  getSeriesTitles,
} from "@lib/utils/static-generation-utils";
import { getSeriesRoute } from "@lib/constants/routes";

// TODO: collections, arcs
const SeriesIndexPage = ({ listData }) => (
  <ListIndex listData={listData} headerLabel="Series" />
);

export const getStaticProps = async () => {
  const seriesTitles = await getSeriesTitles();
  const seriesData = await Promise.all(
    seriesTitles.map(async (seriesTitle) => {
      const comic = await getSeriesData(seriesTitle);
      return {
        link: {
          pathname: getSeriesRoute(seriesTitle),
          name: comic.frontMatter.title,
        },
        comic,
      };
    })
  );
  return {
    props: {
      listData: seriesData,
    },
  };
};

export default SeriesIndexPage;
