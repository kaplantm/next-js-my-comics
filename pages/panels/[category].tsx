import {
  getPanelCategories,
  getPanelsInCategory,
} from "@lib/utils/static-comics/utils";
import React from "react";
import Panels from "@page-containers/panels/category";

const fitlerablePages = ["reacts"];

// TODO: arrows to move to next image
const PanelsCategoryPage = (props) => (
  <Panels
    {...props}
    filterable={fitlerablePages.includes(props.params.category)}
  />
);

export const getStaticPaths = async () => {
  const paths = (await getPanelCategories()).map((category) => ({
    params: { category },
  }));
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({
  params,
}: {
  params: { category: string };
}) {
  const imagePaths = await getPanelsInCategory(params.category);

  return {
    props: {
      params,
      imagePaths,
    },
  };
}

export default PanelsCategoryPage;
