import React from "react";
import { Grid, MenuItem, Typography } from "@material-ui/core";
import { ComicWithMetadata } from "@lib/types";
import AppTextField from "@components/form-inputs/app-text-field";
import DebugOnlyWrapper from "@components/debug-only-wrapper";
import { useFormState } from "@lib/hooks/use-form-state";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LoaderButton from "@components/loader-button";
import { appAxios } from "@lib/utils";
import { runValidatorsAndReturnErrorMessage } from "@lib/hooks/use-form-state/validator-functions";
import { onlyRequiredConfigSet } from "@lib/hooks/use-form-state/validator-configs";

const DebugAddComic = ({
  seriesTitles,
  allArcs,
}: {
  seriesTitles: string[];
  allArcs: string[];
}) => {
  const {
    onFormFieldUpdate,
    formFieldValues,
    formFieldErrors,
    setSubmissionInProgress,
    submissionInProgress,
    setFormError,
    formError,
    disableSubmitButton,
    getPropsForFormField,
  } = useFormState(
    {
      title: "",
      start: "",
      end: "",
      issue: "",
      arc: "",
      link: "",
      series: "",
      description: "",
    },
    {
      requiredFields: ["title", "link", "issue", "series", "description"],
      errorValidatorsForFields: {
        title: (val: string) =>
          runValidatorsAndReturnErrorMessage(val, onlyRequiredConfigSet),
        link: (val: string) =>
          runValidatorsAndReturnErrorMessage(val, onlyRequiredConfigSet),
        series: (val: string) =>
          runValidatorsAndReturnErrorMessage(val, onlyRequiredConfigSet),
        description: (val: string) =>
          runValidatorsAndReturnErrorMessage(val, onlyRequiredConfigSet),
        issue: (val: string) =>
          runValidatorsAndReturnErrorMessage(val, onlyRequiredConfigSet),
      },
    }
  );

  const arcInputProps = getPropsForFormField("arc");

  function handleArcInputChange(event, newInputValue) {
    arcInputProps.onChange({
      target: { value: newInputValue, name: arcInputProps.name },
    });
  }

  async function onCreateComic() {
    setSubmissionInProgress(true);
    const result = await appAxios({
      method: "post",
      url: "/api/create-comic",
      data: formFieldValues,
    });

    console.log({ result });
    setSubmissionInProgress(false);
  }

  console.log({ formFieldErrors });

  return (
    <DebugOnlyWrapper>
      <Grid container spacing={3} justify="center">
        <Grid
          container
          item
          spacing={3}
          xs={12}
          md={10}
          lg={8}
          alignItems="center"
        >
          <Grid item xs={8}>
            <AppTextField
              fullWidth
              label="Title"
              variant="outlined"
              {...getPropsForFormField("title")}
            />
          </Grid>
          <Grid item xs={4}>
            <AppTextField
              fullWidth
              label="Issue #"
              variant="outlined"
              {...getPropsForFormField("issue")}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <AppTextField
              select
              fullWidth
              label="Series"
              variant="outlined"
              {...getPropsForFormField("series")}
            >
              {seriesTitles.map((seriesTitle) => (
                <MenuItem key={seriesTitle} value={seriesTitle}>
                  {seriesTitle}
                </MenuItem>
              ))}
            </AppTextField>
          </Grid>
          <Grid item xs={12} md={4}>
            <Autocomplete
              freeSolo
              options={allArcs}
              getOptionLabel={(option) => option}
              renderInput={(params) => (
                <AppTextField
                  fullWidth
                  {...params}
                  label="Arcs"
                  variant="outlined"
                />
              )}
              value={arcInputProps.value}
              onChange={handleArcInputChange}
            />
          </Grid>
          <Grid item xs={6}>
            <AppTextField
              fullWidth
              label="Start"
              variant="outlined"
              {...getPropsForFormField("start")}
            />
          </Grid>
          <Grid item xs={6}>
            <AppTextField
              fullWidth
              label="End"
              variant="outlined"
              {...getPropsForFormField("end")}
            />
          </Grid>
          <Grid item xs={12}>
            <AppTextField
              fullWidth
              label="Link"
              variant="outlined"
              {...getPropsForFormField("link")}
            />
          </Grid>
          <Grid item xs={12}>
            <AppTextField
              multiline
              fullWidth
              label="Description"
              variant="outlined"
              {...getPropsForFormField("description")}
            />
          </Grid>
          <Grid item container xs={12} justify="center">
            <Typography color="error">{formError}</Typography>
          </Grid>
          <Grid item container xs={12} justify="center">
            <LoaderButton
              disabled={disableSubmitButton || submissionInProgress}
              loading={submissionInProgress}
              fullWidth
              onClick={onCreateComic}
            >
              Submit
            </LoaderButton>
          </Grid>
        </Grid>
      </Grid>
    </DebugOnlyWrapper>
  );
};

export default DebugAddComic;
