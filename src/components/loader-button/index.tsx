import React from 'react';
import { makeStyles } from 'tss-react/mui';
import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { cx } from '@emotion/css';
import { green } from '@mui/material/colors';

const useStyles = makeStyles()(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    position: 'relative',
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

function LoaderButton({
  loading = false,
  children,
  ...props
}: {
  loading?: boolean;
  children: React.ReactNode;
} & ButtonProps) {
  const { classes } = useStyles();
  return (
    <div className={cx(classes.root, 'loaderButtonRoot')}>
      <div className={cx(classes.wrapper, 'loaderButtonWrapper')}>
        <Button className="margin1" {...props}>
          {children}
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </div>
    </div>
  );
}

export default LoaderButton;
