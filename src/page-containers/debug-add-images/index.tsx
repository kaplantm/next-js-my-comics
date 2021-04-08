import React, { useCallback, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { ComicPageParams, ComicWithMetadata } from "@lib/types";
import DebugOnlyWrapper from "@components/debug-only-wrapper";
import ViewableImage from "@components/viewable-image";
import MasonryLayout from "@components/masonry-layout";
import MyDropzone from "@components/my-dropzone";
import LoaderButton from "@components/loader-button";
import { appAxios } from "@lib/utils";
import useStyles from "./use-styles";

const DebugAddImages = ({
  seriesTitles,
  allArcs,
  issue,
  series,
  params = { series: null, issueNumber: null },
  editMode,
}: {
  seriesTitles: string[];
  allArcs: string[];
  issue?: ComicWithMetadata;
  series?: ComicWithMetadata;
  params?: ComicPageParams;
  editMode?: boolean;
}) => {
  const classes = useStyles();
  const [submissionInProgress, setSubmissionInProgress] = useState(false);
  const [optimizeFormError, setOptimizeFormError] = useState(null);
  const [uploadFormError, setUploadFormError] = useState(null);
  const [bytesSaved, setBytesSaved] = useState(0);
  const [optimizedFilePaths, setOptimizedFilePaths] = useState([]);
  const [filesToOptimizeData, setFilesToOptimizeData] = useState<{
    [key: string]: string | Blob;
  }>({});
  const filesToOptimize = Object.values(filesToOptimizeData);
  const { frontMatter, description, imagePaths } =
    issue?.comic || series?.comic || {};
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const [savedImagePaths, setSavedImagePaths] = useState(imagePaths);
  const { title, start, end, arc, link } = frontMatter || ({} as any);
  const onDrop = useCallback((acceptedFiles) => {
    const newFileData = acceptedFiles.reduce((acc, val) => {
      acc[val.name] = val;
      return acc;
    }, {});
    setFilesToOptimizeData((prev) => ({ ...prev, ...newFileData }));
    console.log({ acceptedFiles, newFileData });
    // Do something with the files
  }, []);

  async function onOptimizeImages(e: React.FormEvent) {
    e.preventDefault;
    setSubmissionInProgress(true);

    const formData = new FormData();
    filesToOptimize.forEach((file) => formData.append("images", file as any));

    const result = await appAxios({
      method: "post",
      url: "/api/optimize-images",
      data: formData,
      headers: { "content-type": "multipart/form-data" },
    });

    // TODO: types
    if (result?.error || !result?.response?.data) {
      setOptimizeFormError("Something went wrong");
    } else if (result.response.data.filePaths?.length) {
      setBytesSaved(result.response.data.bytesSaved);
      console.log({ files: result.response.data.filePaths });
      setOptimizedFilePaths((prev) => [
        ...prev,
        ...result.response.data.filePaths,
      ]);
      setOptimizeFormError(null);
      setFilesToOptimizeData({});
    }

    setSubmissionInProgress(false);
  }

  async function onImageUpload() {
    setSubmissionInProgress(false);
    const seriesPath = `/static/series/${params.series}`;
    const jsonPath = !!issue
      ? `${seriesPath}/issues/${params.issueNumber}/images.json`
      : `${seriesPath}/images.json`;
    console.log({ jsonPath, issue });
    const result = await appAxios({
      method: "post",
      url: "/api/upload-images",
      // data: {paths: optimizedFilePaths, folder: params.series},
      data: {
        paths: optimizedFilePaths,
        folder: params.issueNumber
          ? `${params.series}/${params.issueNumber}`
          : params.series,
        jsonPath,
      },
    });

    console.log({ result });
    // TODO: types
    if (
      result?.error ||
      !result?.response?.data ||
      result.response.data.filePaths?.length !== optimizedFilePaths.length
    ) {
      setUploadFormError(
        "Something went wrong. Refresh the page for up to date data."
      );
    } else {
      console.log({ files: result.response.data.filePaths });
      setSavedImagePaths((prev) => [
        ...result.response.data.filePaths,
        ...prev,
      ]);
      setUploadFormError(null);
      setOptimizedFilePaths([]);
    }
    setSubmissionInProgress(false);
  }

  console.log({ optimizedFilePaths });
  return (
    <DebugOnlyWrapper>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Typography variant="h4">{params.series}</Typography>
          <Typography variant="h1">
            {params.issueNumber} {title}
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
              <MasonryLayout>
                {optimizedFilePaths.map((url: string) => (
                  <ViewableImage src={url} key={url} />
                ))}
              </MasonryLayout>
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
              <MasonryLayout>
                {savedImagePaths.map((url: string) => (
                  <ViewableImage src={url} key={url} />
                ))}
              </MasonryLayout>
            </Grid>
          </Grid>
        )}
      </Grid>
    </DebugOnlyWrapper>
  );
};

export default DebugAddImages;
