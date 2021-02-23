import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import axios from "axios";
import { sleep } from "../../../lib/utils";

function ClosuresGood() {
  const [character, setCharacter] = useState(null);
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      await sleep(3000);
      const response = await axios.get("https://swapi.dev/api/people/1/");
      const responseName = response?.data?.name;
      setCharacter(response?.data?.name);
      setLoading(false);

      console.log("After updating name state in useEffect", {
        character,
        response,
      });
      if (character?.name) {
        // Lesson: closures capture old state
        setUrl(response.data.url);
      }
    }
    getData();
  }, []);
  //   TODO: takeaway: unmount

  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography
          variant="h4"
          component="h1"
          color={loading ? "secondary" : "textPrimary"}
        >
          Character Name:{" "}
          {loading ? "Loading..." : character?.name || "Not Found"}
          <br />
          url: {loading ? "Loading..." : url || "Not Found"}
        </Typography>
      </Box>
    </Container>
  );
}

export default ClosuresGood;
