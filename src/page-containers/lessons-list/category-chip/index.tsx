import React from "react";
import { Chip } from "@material-ui/core";
import useStyles from "./useStyles";
import { categoriesEnum } from "../list-items";

export default function CategoryChip({
  category,
}: {
  category: categoriesEnum;
}) {
  const classes = useStyles({ category });

  return <Chip size="small" label={category} className={classes.chip} />;
}
