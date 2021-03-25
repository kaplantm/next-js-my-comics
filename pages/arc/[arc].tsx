import React from "react";

const ArcPage = (props) => {
  console.log(props);
  return <h1>ArcPage</h1>;
};

export const getStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps = async ({ params }) => {
  const path = params.contentful_issue_params
    ? params.contentful_page_params.join("/")
    : "/";
  // let arc = await ContentfulClient.fetchArc(path);

  return {
    props: {
      params,
      // entry: getSafeObject(arc),
    },
  };
};

export default ArcPage;
