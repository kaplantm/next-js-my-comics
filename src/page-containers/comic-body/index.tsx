import React from "react";
import { Typography, Grid, Divider } from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import useStyles from "./use-styles";
import ViewableImage from "../../components/viewable-image";
import { getDisplaySubtitle, getDisplayTitle } from "./helpers";
import { ComicWithParamsType } from "@lib/types";

type ComicBodyProps = {
  params: { series: string; issueNumber: number };
  issue?: ComicWithParamsType;
  series: ComicWithParamsType;
};

// TODO: tpye of info and prop type
// TODO: main page w/ everything in order. Order options: reading order, by comic, by year published
function ComicBody({ params, issue, series }: ComicBodyProps) {
  const classes = useStyles();

  const {
    description: seriesDescription,
    coverPath: seriesCoverPath,
    frontMatter: seriesFrontMatter,
  } = series.comic;
  const {
    description: issueDescription,
    coverPath: issueCoverPath,
    frontMatter: issueFrontMatter,
  } = issue?.comic || {};
  const isIssue = !!issue;
  const { description, coverPath, imagePaths } = isIssue
    ? issue.comic
    : series.comic;
  const { link: titleLink, title } = isIssue
    ? issueFrontMatter
    : seriesFrontMatter;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {getDisplayTitle(
          titleLink,
          title,
          isIssue,
          seriesFrontMatter.startYear,
          seriesFrontMatter.endYear
        )}
        {isIssue &&
          getDisplaySubtitle(
            params.series,
            seriesFrontMatter.title,
            issueFrontMatter.issueNumber,
            issueFrontMatter.startYear,
            issueFrontMatter.endYear
          )}
      </Grid>

      <Grid item xs={12} className={classes.coverImageContainer}>
        <Typography component="div">
          <ViewableImage src={coverPath} className={classes.coverImage} />
          {description && <ReactMarkdown>{description}</ReactMarkdown>}
        </Typography>
      </Grid>

      {!!imagePaths?.length && (
        <>
          <Grid item xs={12}>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              {imagePaths.map((url: string) => (
                <Grid item xs={12} md={4} key={url}>
                  <ViewableImage src={url} width="100%" />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default ComicBody;
