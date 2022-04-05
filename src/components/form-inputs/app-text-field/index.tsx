import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { cx } from '@emotion/css';
import useStyles from './use-styles';

function AppTextField(props: TextFieldProps) {
  const { classes } = useStyles();
  return (
    <TextField
      classes={{
        root: cx('appTextFieldRot', classes.root),
      }}
      FormHelperTextProps={{
        // also including static class name so external components can target and override this class
        className: cx('appTextFieldHelperText', classes.helperText),
      }}
      {...props}
    />
  );
}

const AppTextFieldMemoized = React.memo(AppTextField);

export default AppTextFieldMemoized;
