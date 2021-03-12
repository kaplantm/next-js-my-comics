import React from "react";
import { Container, Box } from "@material-ui/core";
import LessonsList from "../src/page-containers/lessons-list";

export default function Index() {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" justifyContent="center">
        <LessonsList />
      </Box>
    </Container>
  );
}
