import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import { ComicPageParams, ComicWithMetadata } from '@lib/types';
import MasonryLayout from '@components/masonry-layout';
import { getScaledImageWidthHeight } from '@lib/utils/image-utils';
import useStyles from './use-styles';
import ViewableImage from '../../components/viewable-image';
import { getDisplaySubtitle, getDisplayTitle } from './helpers';

type ComicBodyProps = {
  params: ComicPageParams;
  issue?: ComicWithMetadata;
  series: ComicWithMetadata;
  children: React.ReactNode;
};

function ComicBody({ params, issue, series, children }: ComicBodyProps) {
  const { frontMatter: seriesFrontMatter } = series.comic;
  const { frontMatter: issueFrontMatter } = issue?.comic || {};
  const isIssue = !!issue;

  const { link: titleLink, title } = isIssue
    ? issueFrontMatter
    : seriesFrontMatter;
  const { description, coverPath, imagePaths } = isIssue
    ? issue.comic
    : series.comic;
  const { width: coverWidth, height: coverHeight } = getScaledImageWidthHeight(
    coverPath,
    400,
    600
  );
  const classes = useStyles({ coverWidth, coverHeight });

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
        {coverPath && (
          <ViewableImage
            src={coverPath}
            width={coverWidth}
            height={coverHeight}
          />
        )}
        <Typography component="div">
          {description && <ReactMarkdown>{description}</ReactMarkdown>}
        </Typography>
        {children && (
          <div className={classes.childrenContainer}>{children}</div>
        )}
      </Grid>

      {!!imagePaths?.length && (
        <>
          <Grid item xs={12} className={classes.imagesContainer}>
            <Grid item xs={12} container spacing={3}>
              <MasonryLayout images={imagePaths} />
            </Grid>
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default ComicBody;
