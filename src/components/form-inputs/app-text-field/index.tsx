import React from "react";
import { TextField, TextFieldProps } from "@material-ui/core";
import useStyles from "./useStyles";
import clsx from "clsx";

function AppTextField(props: TextFieldProps) {
  const classes = useStyles();
  return (
    <TextField
      classes={{
        root: clsx("appTextFieldRot", classes.root),
      }}
      FormHelperTextProps={{
        // also including static class name so external components can target and override this class
        className: clsx("appTextFieldHelperText", classes.helperText),
      }}
      {...props}
    />
  );
}

export default React.memo(AppTextField);
