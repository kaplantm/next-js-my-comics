import React from "react";
import { getSeriesTitles, getSeries } from "@lib/utils/static-comics/utils";
import DebugAddComic from "@page-containers/debug-add-comic";
import { ComicPageParams } from "@lib/types";

const DebugEditComicPage = (props) => <DebugAddComic {...props} editMode />;

export const getStaticPaths = async () => {
  const seriesTitles = await getSeriesTitles();
  const paths = seriesTitles.map((series) => ({ params: { series } }));

  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: { params: ComicPageParams }) {
  const series = await getSeries(params.series);

  return {
    props: {
      params,
      series,
    },
  };
}
export default DebugEditComicPage;
