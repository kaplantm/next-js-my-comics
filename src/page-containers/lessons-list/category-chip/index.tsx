import React, { useRef } from "react";
import { Chip } from "@material-ui/core";
import useStyles from "./useStyles";
import { categoriesEnum } from "../list-items";
import clsx from "clsx";
import { Add, Cancel } from "@material-ui/icons";

export default function CategoryChip({
  category,
  toggleActive,
  active,
}: {
  category: categoriesEnum;
  toggleActive: (category: categoriesEnum) => void;
  active: boolean;
}) {
  const classes = useStyles({ category });
  const ref = useRef(null);

  function handleToggleActive() {
    toggleActive(category);
    if (ref.current) {
      ref.current.blur();
    }
  }

  return (
    <Chip
      ref={ref}
      size="small"
      label={category}
      className={clsx(classes.chip, active && classes.active, "chipMain")}
      onClick={handleToggleActive}
      onDelete={handleToggleActive}
      deleteIcon={active ? <Cancel /> : <Add />}
    />
  );
}
