import React from "react";
import { getReadingOrder } from "@lib/utils/static-comic-file-manager/utils";
import getInitializedComicFileManager from "@lib/utils/static-comic-file-manager";
import MainIndex from "@page-containers/main-index";

const IndexPage = (props) => <MainIndex {...props} />;

export const getStaticProps = async () => {
  const readingOrder = await getReadingOrder();
  const singletonStaticComicFileManager = await getInitializedComicFileManager();
  const { comics } = singletonStaticComicFileManager;
  const allIssues = Object.keys(comics)
    .map((seriesTitle) => {
      const issuesInSeries = comics[seriesTitle].issues;
      return Object.values(issuesInSeries);
    })
    .flat();
  return {
    props: {
      allIssues,
      readingOrder,
    },
  };
};

export default IndexPage;
