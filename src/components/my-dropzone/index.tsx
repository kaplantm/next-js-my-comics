import { Typography } from '@material-ui/core';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import useStyles from './use-styles';

function MyDropzone({
  onDrop,
  currentFileCount,
}: {
  onDrop: (files: any) => void;
  currentFileCount?: number;
}) {
  const classes = useStyles();
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={classes.dropzone}
      role="button"
      aria-label="Upload Images"
    >
      <input {...getInputProps()} />
      <Typography variant="h4">
        {isDragActive ? (
          <>Drop the files here ...</>
        ) : (
          <>Drag 'n' drop some files here, or click to select files</>
        )}
        {!!currentFileCount && (
          <Typography variant="h4" className="demiBold" component="span">
            {' '}
            ({currentFileCount} file{currentFileCount > 1 ? 's' : ''} queued)
          </Typography>
        )}
      </Typography>
    </div>
  );
}

export default MyDropzone;
