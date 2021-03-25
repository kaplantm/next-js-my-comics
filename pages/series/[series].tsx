import React from "react";

const SeriesPage = (props) => {
  console.log(props);
  return <h1>SeriesPage</h1>;
};

export const getStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps = async ({ params }) => {
  const path = params.contentful_issue_params
    ? params.contentful_page_params.join("/")
    : "/";
  // let series = await ContentfulClient.fetchSeries(path);

  return {
    props: {
      params,
      // entry: getSafeObject(series),
    },
  };
};

export default SeriesPage;
