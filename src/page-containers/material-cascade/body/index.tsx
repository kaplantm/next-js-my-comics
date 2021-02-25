import React from "react";
import { Chip } from "@material-ui/core";
import useStyles from "./useStyles";

function MaterialCascadeBody({ inheritedClasses }: { inheritedClasses: any }) {
  const localClasses = useStyles();
  const className = inheritedClasses
    ? inheritedClasses.inherited
    : localClasses.local;

  return (
    <Chip
      label={
        inheritedClasses ? "Using passed down classes" : "Using local classes"
      }
      className={className}
    />
  );
}

export default MaterialCascadeBody;
