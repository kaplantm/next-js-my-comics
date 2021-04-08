import React from "react";
import { getAllSeries, getReadingOrder } from "@lib/utils/static-comics/utils";
import DebugAddComic from "@page-containers/debug-add-comic";

const DebugAddComicPage = (props) => <DebugAddComic {...props} />;

export const getStaticProps = async () => {
  const readingOrder = await getReadingOrder();
  const comics = await getAllSeries(true);
  const seriesTitles = Object.keys(comics);
  const allIssues = seriesTitles
    .map((seriesTitle) => {
      const issuesInSeries = comics[seriesTitle].issues;
      return Object.values(issuesInSeries);
    })
    .flat();
  const allArcs = allIssues.reduce((acc, { comic }) => {
    if (comic.frontMatter.arc) {
      const index = acc.indexOf(comic.frontMatter.arc);
      if (index === -1) {
        acc.push(comic.frontMatter.arc);
      }
    }
    return acc;
  }, []);

  return {
    props: {
      seriesTitles,
      allArcs,
    },
  };
};

export default DebugAddComicPage;
