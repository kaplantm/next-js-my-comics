import React from "react";
import { getSeries, getSeriesTitles } from "@lib/utils/static-comics/utils";
import { ComicPageParams } from "@lib/types";
import DebugAddImages from "@page-containers/debug-add-images";

const DebugAddImagesPage = (props) => <DebugAddImages {...props} editMode />;

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
export default DebugAddImagesPage;
