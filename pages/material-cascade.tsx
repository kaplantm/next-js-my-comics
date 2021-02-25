import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Button, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import MaterialCascade from "../src/page-containers/material-cascade";
import { pushCurrentPageWithUpdatedQueryParams } from "../src/lib/utils";

const coreImport = 'import {Typography} from "@material-ui/core";';
const directImport = 'import Typography from "@material-ui/core/Typography"';

export default function MaterialCascadePage() {
  const router = useRouter();
  const [isBad, setIsBad] = useState(undefined);

  useEffect(() => {
    if (router.isReady) {
      const bad = router.query.bad === "true";
      setIsBad(bad);
      pushCurrentPageWithUpdatedQueryParams({ bad });
    }
  }, [router.query.bad]);

  function toggleIsBad() {
    const bad = !isBad;
    pushCurrentPageWithUpdatedQueryParams({ bad });
    setIsBad(bad);
  }

  // On this page we determine which state to show based on the url query params
  // Don't know which state to show until the routers is ready to parse the query params
  if (isBad === undefined) {
    return null;
  }

  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography variant="h2">
          Material UI CSS Cascade - {isBad ? "Failing" : "Working"} Example
        </Typography>
        <Typography variant="body1" paragraph>
          Material UI injects its baseline CSS for each component the first time
          they are imported.
        </Typography>
        <Typography variant="body1" paragraph>
          This means if you declare your classes before that component is
          imported, material ui may inject its css after yours has loaded and
          therefore win the cascade battle. This can make the UI wonky and
          inconsistent, with different css winning the cascade depending on
          which components are loaded in which order.
        </Typography>
        <Typography variant="body1" paragraph>
          To complicate things further, if you import the same component from
          two different sources, e.g.{" "}
          <Typography color="secondary" component="span">
            <code>{coreImport}</code>
          </Typography>{" "}
          vs{" "}
          <Typography color="secondary" component="span">
            <code>{directImport}</code>
          </Typography>{" "}
          its baseline css will be imported twice at different times. This is
          causes more CSS weirdness and increases bundle sizes.
        </Typography>
        <Typography variant="body1" paragraph>
          And the worst part of this? These cascade issue often aren't visible
          unless running NextJS in a production build.
        </Typography>
        <Typography variant="body1" paragraph>
          TLDR: Don't pass down classes. Always import components from the same
          source.
        </Typography>
      </Grid>

      <Grid item>
        <Button onClick={toggleIsBad}>
          {isBad ? "Switch to working example" : "Switch to failing example"}
        </Button>
      </Grid>

      <Grid item>
        <MaterialCascade isBad={isBad} />
      </Grid>
    </Grid>
  );
}
