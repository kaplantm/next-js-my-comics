import React from "react";
import ListIndex from "@page-containers/comic-list-index/index";
import { getSeriesRoute } from "@lib/constants/routes";
import getInitializedComicFileManager from "@lib/utils/static-comic-file-manager";

const SeriesIndexPage = ({ listData }) => (
  <ListIndex listData={listData} headerLabel="Series" />
);

export const getStaticProps = async () => {
  const singletonStaticComicFileManager = await getInitializedComicFileManager();
  const comics = singletonStaticComicFileManager.comics;
  const listData = Object.values(comics).map(({ params, comic }) => ({
    link: {
      pathname: getSeriesRoute(params.series),
      name: comic.frontMatter.title,
    },
    comic,
  }));

  return {
    props: {
      listData,
    },
  };
};

export default SeriesIndexPage;
