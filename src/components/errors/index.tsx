import React from 'react';
import Head from 'next/head';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from 'tss-react/mui';

// TODO: now swap icons source
const statusCodes: { [key: string]: string } = {
  401: 'Forbidden',
  400: 'Bad Request',
  404: 'This page could not be found.',
  405: 'Method Not Allowed',
  500: 'Internal Server Error',
};

const useStyles = makeStyles()(theme => ({
  wrapper: {
    height: '100vh',
    textAlign: 'center',
    padding: theme.spacing(3),
  },
  statusCode: {
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    paddingRight: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const ErrorComponent = ({
  info,
  statusCode,
  setTitle,
  error,
  errorSource,
}: {
  /** Error info to display on page  */
  info?: string;
  /** Error code to display on page. If a number, assume it is an HTTP status code.
   *  The following string values are expected:
   *  "NVT": No valid tab in TabbedContainer
   *  "EB": Error caught in ErrorBoundary */
  statusCode?: number | 'EB' | 'NVT';
  /** If true, set page title  */
  setTitle?: boolean;
  /** Raw error and/or additional error data to log to console */
  error?: Error | { message?: string; data?: any };
  /** String representing the source of the error  */
  errorSource: string;
}) => {
  const { classes } = useStyles();
  const content: string =
    info ||
    statusCodes[statusCode as string] ||
    'An unexpected error has occurred.';

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      className={classes.wrapper}
    >
      {setTitle && (
        <Head>
          <title>
            Tonarie's Comics | {statusCode}: {content}
          </title>
        </Head>
      )}
      <Box display="flex" alignItems="center">
        {statusCode ? (
          <Typography
            component="h2"
            variant="h4"
            className={classes.statusCode}
          >
            {statusCode}
          </Typography>
        ) : null}
        <Typography component="h1" variant="h6">
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

export default ErrorComponent;
