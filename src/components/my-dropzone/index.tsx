import { Typography } from '@material-ui/core';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import useStyles from './use-styles';

function MyDropzone({ onDrop }: { onDrop: (files: any) => void }) {
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
      {isDragActive ? (
        <Typography variant="h4">Drop the files here ...</Typography>
      ) : (
        <Typography variant="h4">
          Drag 'n' drop some files here, or click to select files
        </Typography>
      )}
    </div>
  );
}

export default MyDropzone;
