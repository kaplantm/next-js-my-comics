import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Grid,
  TextField,
  Table,
  TableCell,
  TableRow,
  TableHead,
} from "@material-ui/core";
import { ArrowForward } from "@material-ui/icons";
import { stableToFixed } from "../src/lib/utils/number-utils";
import AppLink from "../src/components/app-link";

const defaultExampleOne = 12.655;
const defaultExampleTwo = 92.655;

export default function RoundingPage() {
  const [exampleOne, setExampleOne] = useState(defaultExampleOne);
  const [exampleTwo, setExampleTwo] = useState(defaultExampleTwo);

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
          JS Float Rounding using toFixed is a little crazy.
        </Typography>
        <Typography variant="h4">
          Here we demonstrate this and include an alternative method.
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="body1" className="bold">
          Examples using native <code>Number.prototype.toFixed()</code> method:
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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Example Input</TableCell>
              <TableCell align="center">
                Native: <code>Number.prototype.toFixed()</code>
              </TableCell>
              <TableCell align="center">
                Custom: <code>stableToFixed(number)</code>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableRow>
            <TableCell>
              <TextField
                onChange={onChangeExampleOne}
                value={exampleOne}
                type="number"
              />
            </TableCell>
            <TableCell align="center">{exampleOne.toFixed(2)}</TableCell>
            <TableCell align="center">{stableToFixed(exampleOne)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <TextField
                onChange={onChangeExampleTwo}
                value={exampleTwo}
                type="number"
              />
            </TableCell>
            <TableCell align="center">{exampleTwo.toFixed(2)}</TableCell>
            <TableCell align="center">{stableToFixed(exampleTwo)}</TableCell>
          </TableRow>
        </Table>
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
