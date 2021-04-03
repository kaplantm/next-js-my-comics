import React from "react";
import { Typography, Grid, Divider } from "@material-ui/core";
import ReactMarkdown from "react-markdown";
import useStyles from "./use-styles";
import ViewableImage from "../../components/viewable-image";
import { getDisplaySubtitle, getDisplayTitle } from "./helpers";
import { ComicWithParamsType } from "@lib/types";
import MasonryLayout from "@components/masonry-layout";

type ComicBodyProps = {
  params: { series: string; issueNumber: number };
  issue?: ComicWithParamsType;
  series: ComicWithParamsType;
};

function ComicBody({ params, issue, series }: ComicBodyProps) {
  const classes = useStyles();

  const { frontMatter: seriesFrontMatter } = series.comic;
  const { frontMatter: issueFrontMatter } = issue?.comic || {};
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
          seriesFrontMatter.start,
          seriesFrontMatter.end
        )}
        {isIssue &&
          getDisplaySubtitle(
            params.series,
            seriesFrontMatter.title,
            issueFrontMatter.issueNumber,
            issueFrontMatter.start,
            issueFrontMatter.end
          )}
      </Grid>

      <Grid item xs={12} className={classes.coverImageContainer}>
        <Typography component="div">
          <ViewableImage src={coverPath} />
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
  );
}

export default ComicBody;
