import React from "react";
import { Container, Typography, Box, Chip, Divider } from "@material-ui/core";
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
