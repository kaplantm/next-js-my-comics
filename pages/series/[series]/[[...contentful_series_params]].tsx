import React from "react";
import { getSafeObject } from "@lib/utils/object-utils";
import ContentfulClient from "@lib/contentful/client";

const SeriesPage = (props) => {
  console.log(props);
  return <h1>ComicStoryPage</h1>;
};

export const getStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps = async ({ params }) => {
  const path = params.contentful_issue_params
    ? params.contentful_page_params.join("/")
    : "/";
  let series = await ContentfulClient.fetchSeries(path);

  return {
    props: {
      params,
      entry: getSafeObject(series),
    },
  };
};

export default SeriesPage;
