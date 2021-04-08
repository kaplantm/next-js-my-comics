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
import FileInputButton from "./file-input-button";

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
  const [filesToOptimizeData, setFilesToOptimizeData] = useState<{
    [key: string]: string | Blob;
  }>({});
  const filesToOptimize = Object.values(filesToOptimizeData);
  const { frontMatter, description, imagePaths } =
    issue?.comic || series?.comic || {};
  const { title, start, end, arc, link } = frontMatter || ({} as any);
  const onDrop = useCallback((acceptedFiles) => {
    const newFileData = acceptedFiles.reduce((acc, val) => {
      acc[val.name] = val;
      return acc;
    }, {});
    setFilesToOptimizeData((prev) => ({ ...prev, ...newFileData }));
    console.log({ acceptedFiles });
    // Do something with the files
  }, []);

  async function onOptimizeImages(e: React.FormEvent) {
    e.preventDefault;
    setSubmissionInProgress(true);

    const formData = new FormData();
    formData.append("images", filesToOptimize as any);

    const result = await appAxios({
      method: "post",
      url: "/api/optimize-images",
      data: formData,
      headers: { "content-type": "multipart/form-data" },
    });
    setSubmissionInProgress(false);
  }

  async function onFileInputChange(formData) {
    const result = await appAxios({
      method: "post",
      url: "/api/optimize-images",
      data: formData,
      headers: { "content-type": "multipart/form-data" },
    });
  }

  return (
    <DebugOnlyWrapper>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12}>
          <Typography variant="h3">Upload Images:</Typography>
        </Grid>
        <form onSubmit={onOptimizeImages} className={classes.uploadForm}>
          <div>
            <Grid item xs={12} container spacing={3}>
              <Grid item xs={8}>
                <FileInputButton
                  acceptedFileTypes="png"
                  allowMultipleFiles
                  label="Upload Images"
                  onChange={onFileInputChange}
                  uploadFileName="images"
                />
                {/* <MyDropzone onDrop={onDrop} /> */}
              </Grid>
              <Grid item container xs={4} justify="center">
                <LoaderButton
                  size="large"
                  disabled={!filesToOptimize.length || submissionInProgress}
                  loading={submissionInProgress}
                  fullWidth
                  onClick={onOptimizeImages}
                >
                  Submit
                </LoaderButton>
              </Grid>
            </Grid>
          </div>
        </form>
        <Grid item xs={12}>
          <Typography variant="h3">Optimized Images:</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Current Images:</Typography>
        </Grid>
        {!!imagePaths?.length && (
          <>
            <Grid item xs={12}>
              <Grid item xs={12} container spacing={3}>
                <MasonryLayout>
                  {imagePaths.map((url: string) => (
                    <ViewableImage src={url} key={url} />
                  ))}
                </MasonryLayout>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </DebugOnlyWrapper>
  );
};

export default DebugAddImages;
