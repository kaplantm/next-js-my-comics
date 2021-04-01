import { getPanelCategories } from "@lib/utils/static-comic-file-manager/utils";
import getSingletonStaticComicFileManager from "@lib/utils/static-comic-file-manager";
import React from "react";
import Panels from "@page-containers/panels/category";

// TODO: arrows to move to next image
const PanelsCategoryPage = (props) => <Panels {...props} />;

export const getStaticPaths = async () => {
  const paths = (await getPanelCategories()).map((category) => ({
    params: { category },
  }));
  console.log("****", { paths });
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
  const singletonStaticComicFileManager = await getSingletonStaticComicFileManager;
  const imagePaths = singletonStaticComicFileManager.panels[params.category];

  return {
    props: {
      params,
      imagePaths,
    },
  };
}

export default PanelsCategoryPage;
