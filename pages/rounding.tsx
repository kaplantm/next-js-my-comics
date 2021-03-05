import React, { useState } from "react";
import { Box, Typography, Button, Grid, TextField } from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { stableToFixed } from "../src/lib/utils/number-utils";
import AppLink from "../src/components/app-link";

const defaultExampleOne = 12.655;
const defaultExampleTwo = 92.655;

export default function RoundingPage() {
  const [exampleOne, setExampleOne] = useState(defaultExampleOne);
  const [exampleTwo, setExampleTwo] = useState(defaultExampleTwo);
  const [isBad, setIsBad] = useState(true);

  function toggleIsBad() {
    setIsBad((prev) => !prev);
  }

  function onChangeExampleOne(event: React.ChangeEvent<HTMLInputElement>) {
    setExampleOne(parseFloat(event.target.value));
  }
  function onChangeExampleTwo(event: React.ChangeEvent<HTMLInputElement>) {
    setExampleTwo(parseFloat(event.target.value));
  }
  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography variant="h2">
          JS Float Rounding using toFixed is a little crazy. Here we demonstrate
          this and include an alternative method.
        </Typography>
        <Typography variant="body1">
          Lets round some number using the native javascript{" "}
          <Typography color="secondary" component="span">
            <code>Number.prototype.toFixed()</code>
          </Typography>{" "}
          method
        </Typography>
      </Grid>

      <Grid item>
        <Button onClick={toggleIsBad}>
          {isBad
            ? "Switch to working example using custom stableToFixed method"
            : "Switch to failing example using native toFixed method"}
        </Button>
      </Grid>

      <Grid item>
        <Typography variant="body1" className="bold">
          Examples using native toFixed method:
        </Typography>
        <Box display="flex">
          {defaultExampleOne} <ArrowForward /> {defaultExampleOne.toFixed(2)}{" "}
        </Box>
        <Box display="flex">
          {defaultExampleTwo} <ArrowForward /> {defaultExampleTwo.toFixed(2)}{" "}
        </Box>
        <Typography variant="body1" color="error">
          <em>What the heck? the rounding is inconsistent.</em>
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="body1" className="bold">
          Examples using custom stableToFixed method:
        </Typography>
        <Box display="flex">
          {defaultExampleOne} <ArrowForward />{" "}
          {stableToFixed(defaultExampleOne)}{" "}
        </Box>
        <Box display="flex">
          {defaultExampleTwo} <ArrowForward />{" "}
          {stableToFixed(defaultExampleOne)}{" "}
        </Box>
        <Typography variant="body1">
          <em>The rounding is consistent.</em>
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="body1" className="bold">
          Try it:
        </Typography>
        <Box display="flex">
          <TextField
            onChange={onChangeExampleOne}
            value={exampleOne}
            type="number"
          />
          <Box ml={3}>
            <Typography variant="body1" className="bold">
              ={" "}
              {isBad
                ? `${exampleOne}.toFixed(2)`
                : `stableToFixed(${exampleOne})`}{" "}
              = {isBad ? exampleOne.toFixed(2) : stableToFixed(exampleOne)}
            </Typography>
          </Box>
        </Box>
        <Box display="flex">
          <TextField
            onChange={onChangeExampleTwo}
            value={exampleTwo}
            type="number"
          />
          <Box ml={3}>
            <Typography variant="body1" className="bold">
              ={" "}
              {isBad
                ? `${exampleTwo}.toFixed(2)`
                : `stableToFixed(${exampleTwo})`}{" "}
              {isBad ? exampleTwo.toFixed(2) : stableToFixed(exampleTwo)}
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <AppLink
          nextProps={{
            href: "https://stackoverflow.com/a/23560569",
          }}
        >
          Source for stableToFixed
        </AppLink>
      </Grid>
    </Grid>
  );
}
