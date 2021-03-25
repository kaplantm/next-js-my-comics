import React from "react";
import { Container, Box } from "@material-ui/core";

function IndexPage() {
  return <Container maxWidth="md">Series index</Container>;
}

export const getStaticPaths = async () => ({
  paths: [],
  fallback: "blocking",
});

export const getStaticProps = async ({ params }) => {
  return {
    props: {
      params: {},
      // entry: getSafeObject(series),
    },
  };
};

export default IndexPage;
