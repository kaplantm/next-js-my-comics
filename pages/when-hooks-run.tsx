import React, { useState, useEffect } from "react";
import { Typography, Button, Grid } from "@material-ui/core";
import { useRouter } from "next/router";
import { pushCurrentPageWithUpdatedQueryParams } from "../src/lib/utils";
import WhenHooksRunBad from "../src/page-containers/when-hooks-run/bad";
import WhenHooksRunGood from "../src/page-containers/when-hooks-run/good";

export default function WhenHooksRunPage() {
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
  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography variant="h2">
          When do hooks run? {isBad ? "Bad" : "Good"} Example{" "}
        </Typography>
        <Typography variant="body1">
          Hooks run every rerender of the component. They also rerun whenever
          their internal state changes. Avoid unnecessary hook runs in child
          components by using React.memo. You could also use useCallback to have
          a hook return a callable function that only executes when called (this
          is better suited to scenarios when you do not require the value each
          render. See use-is-mounted for an example of this.)
        </Typography>
      </Grid>

      <Grid item>
        <Typography variant="body1" paragraph>
          <em>In this example,</em> there is a hook in the DateDisplay component
          (outlined in dotted pink). Ideally, we want to render this component
          and rerun this hook only when a value this component cares about
          changes - in this scenario, whenever we add a day. We do not want it
          to re-render when the paren't components state changes when we click
          toggle color.
        </Typography>
        <Typography variant="body1" paragraph>
          Good example - only re-run useDate hook when date changes, not when
          unrelated state (parent component's color) changes
        </Typography>
        <Typography variant="body1" paragraph>
          Failing example - re-run useDate hook when any of parents state
          changes. (Note: Sometimes this is desirable, but its important to be
          aware of when your hooks are running.)
        </Typography>
      </Grid>

      <Grid item>
        <Button className="margin1" onClick={toggleIsBad} variant="outlined">
          {isBad ? "Switch to working example" : "Switch to failing example"}
        </Button>
      </Grid>
      <Grid item>{isBad ? <WhenHooksRunBad /> : <WhenHooksRunGood />}</Grid>
    </Grid>
  );
}
