import React, { useCallback, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { ComicPageParams, ComicWithMetadata } from '@lib/types';
import DebugOnlyWrapper from '@components/debug-only-wrapper';
import MasonryLayout from '@components/masonry-layout';
import MyDropzone from '@components/my-dropzone';
import LoaderButton from '@components/loader-button';
import { appAxios } from '@lib/utils';
import useStyles from './use-styles';

const DebugAddImages = ({
  issue,
  series,
  params = { series: null, issueNumber: null, category: null },
  imagePaths: imagePathsProp,
  maxDimension = 1500,
}: {
  issue?: ComicWithMetadata;
  series?: ComicWithMetadata;
  params?: ComicPageParams & { category: string };
  imagePaths?: string[];
  maxDimension?: number;
}) => {
  const classes = useStyles();
  const isCategory = !!params.category;
  const [submissionInProgress, setSubmissionInProgress] = useState(false);
  const [optimizeFormError, setOptimizeFormError] = useState(null);
  const [uploadFormError, setUploadFormError] = useState(null);
  const [bytesSaved, setBytesSaved] = useState(0);
  const [optimizedFilePaths, setOptimizedFilePaths] = useState([]);
  const [filesToOptimizeData, setFilesToOptimizeData] = useState<{
    [key: string]: string | Blob;
  }>({});
  const filesToOptimize = Object.values(filesToOptimizeData);
  const { frontMatter, imagePaths, coverPath } = issue?.comic ||
    series?.comic || { imagePaths: imagePathsProp, fontMatter: null };
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [savedImagePaths, setSavedImagePaths] = useState([
    ...imagePaths,
    ...(coverPath ? [coverPath] : []),
  ]);

  const onDrop = useCallback(acceptedFiles => {
    const newFileData = acceptedFiles.reduce((acc, val) => {
      acc[val.name] = val;
      return acc;
    }, {});
    setFilesToOptimizeData(prev => ({ ...prev, ...newFileData }));
    // Do something with the files
  }, []);

  async function onOptimizeImages(e: React.FormEvent) {
    e.preventDefault;
    setSubmissionInProgress(true);

    const formData = new FormData();
    filesToOptimize.forEach(file => formData.append('images', file as any));
    formData.append('maxDimension', `${maxDimension}`);

    const result: any = await appAxios({
      method: 'post',
      url: '/api/optimize-images',
      data: formData,
      headers: { 'content-type': 'multipart/form-data' },
    });

    // TODO: types
    if (result?.error || !result?.response?.data) {
      setOptimizeFormError('Something went wrong');
    } else if (result.response.data.filePaths?.length) {
      setBytesSaved(result.response.data.bytesSaved);
      setOptimizedFilePaths(prev => [
        ...prev,
        ...result.response.data.filePaths,
      ]);
      setOptimizeFormError(null);
      setFilesToOptimizeData({});
    }

    setSubmissionInProgress(false);
  }

  async function onImageUpload() {
    setSubmissionInProgress(true);
    const categoryPath = isCategory
      ? `/static/panels/${params.category}`
      : `/static/series/${params.series}`;
    const jsonPath = issue
      ? `${categoryPath}/issues/${params.issueNumber}/images.json`
      : `${categoryPath}/images.json`;

    const result: any = await appAxios({
      method: 'post',
      url: '/api/upload-images',
      // data: {paths: optimizedFilePaths, folder: params.series},
      data: {
        paths: optimizedFilePaths,
        folder: params.issueNumber
          ? `${params.series}/${params.issueNumber}`
          : params.category || params.series,
        jsonPath,
      },
    });

    // TODO: types
    if (
      result?.error ||
      !result?.response?.data ||
      result.response.data.filePaths?.length !== optimizedFilePaths.length
    ) {
      setUploadFormError(
        'Something went wrong. Refresh the page for up to date data.'
      );
    } else {
      setSavedImagePaths(prev => [...result.response.data.filePaths, ...prev]);
      setUploadFormError(null);
      setOptimizedFilePaths([]);
    }
    setSubmissionInProgress(false);
  }

  return (
    <DebugOnlyWrapper>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Typography variant="h4">{params.series}</Typography>
          <Typography variant="h1">
            {params.category} {params.issueNumber} {frontMatter?.title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Upload Images:</Typography>
        </Grid>
        <form
          onSubmit={onOptimizeImages}
          ref={formRef}
          className={classes.uploadForm}
        >
          <div>
            <Grid item xs={12} container spacing={3}>
              <Grid item xs={8}>
                <MyDropzone onDrop={onDrop} />
              </Grid>
              <Grid item container xs={4} justify="center">
                <LoaderButton
                  size="large"
                  disabled={!filesToOptimize.length || submissionInProgress}
                  loading={submissionInProgress}
                  fullWidth
                  onClick={onOptimizeImages}
                >
                  Optimize
                </LoaderButton>
              </Grid>
              {optimizeFormError && (
                <Grid item container xs={12} justify="center">
                  <Typography color="error">{optimizeFormError}</Typography>
                </Grid>
              )}
              {!!bytesSaved && (
                <Grid item container xs={12} justify="center">
                  <Typography>Saved {bytesSaved / 1000000}MB</Typography>
                </Grid>
              )}
            </Grid>
          </div>
        </form>
        <Grid item xs={12}>
          <Typography variant="h3">Optimized Images:</Typography>
        </Grid>

        <Grid item xs={8}>
          {!!optimizedFilePaths?.length && (
            <Grid item xs={12} container spacing={3}>
              <MasonryLayout images={optimizedFilePaths} />
            </Grid>
          )}
        </Grid>

        <Grid item container xs={4} justify="center">
          <LoaderButton
            size="large"
            disabled={!optimizedFilePaths.length || submissionInProgress}
            loading={submissionInProgress}
            fullWidth
            onClick={onImageUpload}
          >
            Upload
          </LoaderButton>
          {uploadFormError && (
            <Grid item container xs={12} justify="center">
              <Typography color="error">{uploadFormError}</Typography>
            </Grid>
          )}
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Current Images:</Typography>
        </Grid>
        {!!savedImagePaths?.length && (
          <Grid item xs={12}>
            <Grid item xs={12} container spacing={3}>
              <MasonryLayout images={savedImagePaths} />
            </Grid>
          </Grid>
        )}
      </Grid>
    </DebugOnlyWrapper>
  );
};

export default DebugAddImages;
