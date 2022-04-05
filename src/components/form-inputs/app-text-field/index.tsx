import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import clsx from 'clsx';
import useStyles from './use-styles';

function AppTextField(props: TextFieldProps) {
  const classes = useStyles();
  return (
    <TextField
      classes={{
        root: clsx('appTextFieldRot', classes.root),
      }}
      FormHelperTextProps={{
        // also including static class name so external components can target and override this class
        className: clsx('appTextFieldHelperText', classes.helperText),
      }}
      {...props}
    />
  );
}

const AppTextFieldMemoized = React.memo(AppTextField);

export default AppTextFieldMemoized;
