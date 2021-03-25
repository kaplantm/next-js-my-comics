import React from "react";
import { Container, Box } from "@material-ui/core";
import LessonsList from "../src/page-containers/lessons-list";

function IndexPage() {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" justifyContent="center">
        <LessonsList />
      </Box>
    </Container>
  );
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
