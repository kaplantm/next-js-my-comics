import React from "react";
import { Container, Typography, Box, Chip, Divider } from "@material-ui/core";
import LessonsList from "../src/page-containers/lessons-list";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Typography variant="h4" component="h1" gutterBottom>
          A collection of JS takeaways. Select an example.
        </Typography>
        <Box m={3}>
          <Divider />
        </Box>
        <LessonsList />
      </Box>
    </Container>
  );
}
