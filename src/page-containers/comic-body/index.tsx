import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import { extendedComicIssue, extendedComicSeries } from '@lib/types';
import MasonryLayout from '@components/masonry-layout';
import { getScaledImageWidthHeight } from '@lib/utils/image-utils';
import useStyles from './use-styles';
import ViewableImage from '../../components/viewable-image';
import { getDisplaySubtitle, getDisplayTitle } from './helpers';

type ComicBodyProps = {
  issue?: extendedComicIssue;
  series: extendedComicSeries;
  children: React.ReactNode;
};

function ComicBody({ issue, series, children }: ComicBodyProps) {
  const isIssue = !!issue;

  const { link: titleLink, title, coverImage } = issue || series;
  const images = issue?.imageCollection?.images;
  const imagePaths = images?.length
    ? images.map(({ imageUrl }) => imageUrl)
    : null;

  const { description } = issue || series;
  const { width: coverWidth, height: coverHeight } = coverImage?.imageUrl
    ? getScaledImageWidthHeight(coverImage.imageUrl, 400, 600)
    : { width: 0, height: 0 };
  const seriesToUse = issue?.series || series;
  const classes = useStyles({ coverWidth, coverHeight });

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        {getDisplayTitle(
          titleLink,
          title,
          isIssue,
          new Date(seriesToUse.startCoverDate),
          new Date(seriesToUse.endCoverDate)
        )}
        {isIssue &&
          getDisplaySubtitle(
            seriesToUse.id,
            seriesToUse.title,
            issue.number,
            new Date(issue.coverDate),
            issue.issueType
          )}
      </Grid>

      <Grid item xs={12} className={classes.coverImageContainer}>
        {coverImage?.imageUrl && (
          <ViewableImage
            src={coverImage.imageUrl}
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

      {imagePaths && (
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
