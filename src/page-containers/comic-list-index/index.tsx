import React, { memo } from 'react';
import { Typography, Grid } from '@mui/material';
import { ComicWithMetadata } from '@lib/types';
import ComicIndexListItem from '@components/comic-index-list-item';
import useStyles from './use-styles';
import ShowMoreArea from '@page-containers/show-more-area';

type ComicListIndexProps = {
  headerLabel: string;
  listData: ComicWithMetadata[];
  skipArcColorTooltip?: boolean;
  skipDescription?: boolean;
};

// TODO: page head
// TODO: expand all

function ComicListIndex({
  headerLabel,
  listData,
  skipArcColorTooltip,
  skipDescription,
}: ComicListIndexProps) {
  const { classes } = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.coverImageContainer}>
        {headerLabel && <Typography variant="h1">{headerLabel}</Typography>}
        <ul className={classes.list}>
          <ShowMoreArea>
            {listData.map(({ link, comic }) => (
              <ComicIndexListItem
                key={link.pathname}
                link={link}
                comic={comic}
                skipArcColorTooltip={skipArcColorTooltip}
                skipDescription={skipDescription}
              />
            ))}
          </ShowMoreArea>
        </ul>
      </Grid>
    </Grid>
  );
}

export const MemoizedListIndex = memo(ComicListIndex);

export default MemoizedListIndex;
