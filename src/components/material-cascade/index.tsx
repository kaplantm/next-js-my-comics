import React from "react";
import useStyles from "./useStyles";
import MaterialCascadeBody from "./body";

function MaterialCascade({ isBad }: { isBad: boolean }) {
  const classes = useStyles();

  // Use passed down classes in bad scenario
  return <MaterialCascadeBody inheritedClasses={isBad ? classes : null} />;
}

export default MaterialCascade;
