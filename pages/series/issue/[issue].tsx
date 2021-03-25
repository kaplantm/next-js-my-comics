import React from "react";

const IssuePage = (props) => {
  console.log(props);
  return <h1>IssuePage</h1>;
};

export const getStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps = async ({ params }) => {
  const path = params.contentful_issue_params
    ? params.contentful_page_params.join("/")
    : "/";
  // let issue = await ContentfulClient.fetchIssue(path);

  return {
    props: {
      params,
      // entry: getSafeObject(issue),
    },
  };
};

export default IssuePage;
