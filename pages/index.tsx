import React from "react";
import { Container, Typography, Box, Chip } from "@material-ui/core";

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Select an example.
        </Typography>
        <Chip label={"I'm a Chip"} />
      </Box>
    </Container>
  );
}
