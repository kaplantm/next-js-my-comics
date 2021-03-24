import React from "react";
import ContentfulClient from "@lib/contentful/client";
import { getSafeObject } from "@lib/utils/object-utils";

const IssuePage = (props) => {
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
  let issue = await ContentfulClient.fetchIssue(path);

  return {
    props: {
      params,
      entry: getSafeObject(issue),
    },
  };
};

export default IssuePage;
