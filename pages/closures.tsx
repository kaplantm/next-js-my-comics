import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import axios from "axios";

export default function Closures() {
  const [data, setData] = useState({ result: null, loading: true });

  useEffect(() => {
    async function getData() {
      if (data.loading && !data?.result) {
        console.log("if");
        const response = await axios.get("https://swapi.dev/api/people/1/");
        console.log({ response });
        setData({ result: response?.data, loading: false });
      }
    }
    getData();
  }, [data.loading]);
  //   TODO: takeaway: unmount

  console.log({ data });
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography
          variant="h4"
          component="h1"
          color={data.loading ? "secondary" : "textPrimary"}
        >
          Character name:{" "}
          {data.loading ? "Loading..." : data?.result?.name || "Not Found"}
        </Typography>
      </Box>
    </Container>
  );
}
