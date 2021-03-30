import React from "react";
import { getReadingOrder } from "@lib/utils/static-comic-file-manager/utils";
import getSingletonStaticComicFileManager from "@lib/utils/static-comic-file-manager";
import MainIndex from "@page-containers/main-index";

const IndexPage = (props) => <MainIndex {...props} />;

export const getStaticProps = async () => {
  const readingOrder = await getReadingOrder();
  const singletonStaticComicFileManager = await getSingletonStaticComicFileManager;

  return {
    props: {
      allComics: singletonStaticComicFileManager.comics,
      readingOrder,
    },
  };
};

export default IndexPage;
