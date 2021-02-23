import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Button, Grid } from "@material-ui/core";
import ClosuresGood from "../src/components/closures/good";
import ClosuresBad from "../src/components/closures/bad";
import AppLink from "../src/components/app-link";

export default function Closures() {
  const [isBad, setIsBad] = useState(true);

  function toggleIsBad() {
    setIsBad((prev) => !prev);
  }

  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography variant="h2">Closures</Typography>
        <Typography variant="body1">
          Hooks capture old state due to how javascript closures preserver old
          values. Either avoid accessing updated state within the same hook, or
          trigger another iteration of the hook to run with new state.
        </Typography>
      </Grid>

      <Grid item>
        <AppLink
          nextProps={{
            href: "https://dmitripavlutin.com/react-hooks-stale-closures/",
          }}
        >
          Be Aware of Stale Closures when Using React Hooks
        </AppLink>{" "}
      </Grid>

      <Grid item>
        <Button onClick={toggleIsBad}>
          {isBad ? "Switch to working example" : "Switch to failing example"}
        </Button>{" "}
      </Grid>

      <Grid item>{isBad ? <ClosuresBad /> : <ClosuresGood />}</Grid>
    </Grid>
  );
}
