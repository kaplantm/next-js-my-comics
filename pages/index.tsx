import React from "react";
import { getAllSeries, getReadingOrder } from "@lib/utils/static-comics/utils";
import MainIndex from "@page-containers/main-index";

const IndexPage = (props) => <MainIndex {...props} />;

export const getStaticProps = async () => {
  const readingOrder = await getReadingOrder();
  const comics = await getAllSeries(true);
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
