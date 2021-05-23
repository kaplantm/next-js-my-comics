import React, { useState } from 'react';
import {
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Typography,
} from '@material-ui/core';
import DebugLinksMemo from '@components/debug-links';
import { ComicPageParams, ComicWithMetadata } from '@lib/types';
import AppTextField from '@components/form-inputs/app-text-field';
import DebugOnlyWrapper from '@components/debug-only-wrapper';
import { useFormState } from '@lib/hooks/use-form-state';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LoaderButton from '@components/loader-button';
import { appAxios } from '@lib/utils';
import { runValidatorsAndReturnErrorMessage } from '@lib/hooks/use-form-state/validator-functions';
import { onlyRequiredConfigSet } from '@lib/hooks/use-form-state/validator-configs';
import { getIssueRoute } from '@lib/constants/routes';
import AppLink from '@components/app-link';

const DebugAddComic = ({
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
  const isIssue = !!issue;
  const [savedComicLink, setSavedComicLink] = useState(null);
  const { frontMatter, description } = issue?.comic || series?.comic || {};
  const { title, start, end, arc, link } = frontMatter || ({} as any);
  const {
    onFormFieldUpdate,
    formFieldValues,
    setSubmissionInProgress,
    submissionInProgress,
    setFormError,
    formError,
    disableSubmitButton,
    getPropsForFormField,
  } = useFormState(
    {
      title: title || '',
      start: start || '',
      end: end || '',
      issueNumber: params.issueNumber || '',
      arc: arc || '',
      link: link || '',
      series: params.series || '',
      description: (description || '').trim(),
      isIssue: isIssue || !editMode,
    },
    {
      requiredFields: isIssue
        ? ['title', 'link', 'issueNumber', 'series', 'description']
        : ['link', 'series', 'description'],
      errorValidatorsForFields: {
        title: (val: string) =>
          runValidatorsAndReturnErrorMessage(val, onlyRequiredConfigSet),
        link: (val: string) =>
          runValidatorsAndReturnErrorMessage(val, onlyRequiredConfigSet),
        series: (val: string) =>
          runValidatorsAndReturnErrorMessage(val, onlyRequiredConfigSet),
        description: (val: string) =>
          runValidatorsAndReturnErrorMessage(val, onlyRequiredConfigSet),
        issueNumber: (val: string) =>
          runValidatorsAndReturnErrorMessage(val, onlyRequiredConfigSet),
      },
    }
  );

  const isNewSeries = !editMode && !formFieldValues.isIssue;
  const arcInputProps = getPropsForFormField('arc');

  function handleArcInputChange(event, newInputValue) {
    arcInputProps.onChange({
      target: { value: newInputValue, name: arcInputProps.name },
    });
  }

  async function onCreateComic() {
    setSavedComicLink(null);
    setSubmissionInProgress(true);
    const result = await appAxios({
      method: editMode ? 'PUT' : 'POST',
      url: '/api/create-comic',
      data: {
        ...formFieldValues,
        isIssue: editMode ? isIssue : formFieldValues.isIssue,
        title: isNewSeries ? formFieldValues.series : formFieldValues.title,
      },
    });

    if (result.error) {
      setFormError(
        `Error: ${result.error?.response?.data} (${
          result.error?.response?.status || '?'
        })`
      );
      setSavedComicLink(null);
    } else {
      setSavedComicLink(
        getIssueRoute(
          formFieldValues.series,
          formFieldValues.issueNumber as number
        )
      );
      setFormError(null);
    }
    setSubmissionInProgress(false);
  }

  function handleCheckboxChange(e: any) {
    onFormFieldUpdate({
      target: { name: e.target.name, value: !e.target.checked },
    });
  }

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
          <Grid item xs={12}>
            <FormControlLabel
              disabled={editMode}
              control={
                <Checkbox
                  checked={!formFieldValues.isIssue}
                  color="primary"
                  onChange={handleCheckboxChange}
                  name="isIssue"
                />
              }
              label="Series"
            />
          </Grid>
          {!isNewSeries && (
            <>
              <Grid item xs={8}>
                <AppTextField
                  fullWidth
                  label="Title"
                  variant="outlined"
                  disabled={editMode && !isIssue}
                  {...getPropsForFormField('title')}
                />
              </Grid>
              <Grid item xs={4}>
                <AppTextField
                  fullWidth
                  disabled={editMode}
                  label="Issue #"
                  variant="outlined"
                  {...getPropsForFormField('issueNumber')}
                />
              </Grid>
            </>
          )}

          <Grid item xs={12} md={isNewSeries ? 12 : 8}>
            {isNewSeries ? (
              <AppTextField
                fullWidth
                label="Series"
                variant="outlined"
                {...getPropsForFormField('series')}
              />
            ) : (
              <AppTextField
                select
                fullWidth
                disabled={editMode}
                label="Series"
                variant="outlined"
                {...getPropsForFormField('series')}
              >
                {editMode ? (
                  <MenuItem key={params.series} value={params.series}>
                    {params.series}
                  </MenuItem>
                ) : (
                  seriesTitles.map(seriesTitle => (
                    <MenuItem key={seriesTitle} value={seriesTitle}>
                      {seriesTitle}
                    </MenuItem>
                  ))
                )}
              </AppTextField>
            )}
          </Grid>
          {!isNewSeries && (
            <>
              <Grid item xs={12} md={4}>
                <Autocomplete
                  freeSolo
                  options={allArcs}
                  getOptionLabel={option => option}
                  renderInput={autoCompleteParams => (
                    <AppTextField
                      fullWidth
                      {...autoCompleteParams}
                      label="Arcs"
                      variant="outlined"
                    />
                  )}
                  onInputChange={handleArcInputChange}
                  value={arcInputProps.value}
                  onChange={handleArcInputChange}
                />
              </Grid>
            </>
          )}
          <Grid item xs={6}>
            <AppTextField
              fullWidth
              label="Start"
              variant="outlined"
              {...getPropsForFormField('start')}
            />
          </Grid>
          <Grid item xs={6}>
            <AppTextField
              fullWidth
              label="End"
              variant="outlined"
              {...getPropsForFormField('end')}
            />
          </Grid>
          <Grid item xs={12}>
            <AppTextField
              fullWidth
              label="Link"
              variant="outlined"
              {...getPropsForFormField('link')}
            />
          </Grid>
          <Grid item xs={12}>
            <AppTextField
              multiline
              fullWidth
              label="Description"
              variant="outlined"
              {...getPropsForFormField('description')}
            />
          </Grid>
          <Grid item container xs={12} justify="center">
            <Typography
              color={submissionInProgress ? 'textSecondary' : 'error'}
            >
              {formError}
            </Typography>
          </Grid>

          {savedComicLink && (
            <Grid item container xs={12} justify="center" alignItems="center">
              Created:&nbsp;
              <AppLink isExternal nextProps={{ href: savedComicLink }}>
                {savedComicLink}
              </AppLink>
              <DebugLinksMemo baseLink={savedComicLink} />
            </Grid>
          )}
          <Grid item container xs={12} justify="center">
            <LoaderButton
              size="large"
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
