import React, { useState } from "react";
import { Button, Grid, Typography } from "@material-ui/core";
import IsMounted from "../src/page-containers/ismounted";
import AppLink from "../src/components/app-link";

export default function Closures() {
  const [isBad, setIsBad] = useState(false);

  function toggleIsBad() {
    setIsBad((prev) => !prev);
  }

  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography variant="h2">Checking if a component is mounted</Typography>
        <Typography variant="body1">
          If a component attempts to update its state after its unmounted (e.g.
          due to an async request that resolves after the use has closed the
          containing modal or navigated away from the page), you will see a
          memory leak warning in the console. This can also can unexpected UX as
          async request completed in the background.
        </Typography>
      </Grid>

      <Grid item>
        <AppLink
          nextProps={{
            href:
              "https://daviseford.com/blog/2019/07/11/react-hooks-check-if-mounted.html",
          }}
        >
          Check If A Component Is Mounted
        </AppLink>
      </Grid>

      <Grid item>
        <Button className="margin1" onClick={toggleIsBad} variant="outlined">
          {isBad ? "Switch to working example" : "Switch to failing example"}
        </Button>
      </Grid>
      <Grid item>
        <Typography variant="body1" paragraph>
          On this page, the "Open Comic Vine" link triggers an link to open 3
          seconds after clicking. In the real world, imagine you are doing
          something like a page navigation after an async form submission.
        </Typography>
        <Typography variant="body1" paragraph>
          In the failing example, click an Open Comic Vine link and immediately
          click "JS Lessons" at the top to navigate off this page within the
          site. Even though this component has been unmounted, the link still
          opens. link, so it (correctly) does not open. opens.
        </Typography>
        <Typography variant="body1" paragraph>
          In the working example, do the same thing. In the working example we
          check to make sure the user is still on the page before we open the
          link, so it (correctly) does not open. opens.
        </Typography>
      </Grid>

      <Grid item>
        <IsMounted isBad={isBad} />
      </Grid>
    </Grid>
  );
}
