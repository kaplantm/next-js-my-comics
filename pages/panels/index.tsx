import getSingletonStaticComicFileManager from "@lib/utils/static-comic-file-manager";
import React from "react";
import PanelsIndex from "@page-containers/panels";

const PanelsIndexPage = (props) => <PanelsIndex {...props} />;

export async function getStaticProps() {
  const singletonStaticComicFileManager = await getSingletonStaticComicFileManager;
  const categories = Object.keys(singletonStaticComicFileManager.panels);

  return {
    props: {
      categories,
    },
  };
}

export default PanelsIndexPage;
