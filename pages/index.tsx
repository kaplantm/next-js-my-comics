import React from "react";
import { Container, Typography, Box, Chip, Divider } from "@material-ui/core";

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
        <Chip
          label={"I'm the Chip Component used in the Material Cascade example"}
        />
      </Box>
    </Container>
  );
}
