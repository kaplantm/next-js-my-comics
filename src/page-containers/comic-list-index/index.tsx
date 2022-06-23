import React, { memo } from 'react';
import dynamic from 'next/dynamic';
import { Typography } from '@mui/material';
import { ComicWithMetadata } from '@lib/types';
import ComicIndexListItem from '@components/comic-index-list-item';
import useStyles from './use-styles';

const DynamicShowMoreArea = dynamic(() => import('@components/show-more-area'));

type ComicListIndexProps = {
  headerLabel: string;
  listData: ComicWithMetadata[];
  skipArcColorTooltip?: boolean;
  skipDescription?: boolean;
};

function ComicListIndex({
  headerLabel,
  listData,
  skipArcColorTooltip,
  skipDescription,
}: ComicListIndexProps) {
  const { classes } = useStyles();

  return (
    <div className={classes.listContainer}>
      {headerLabel && <Typography variant="h1">{headerLabel}</Typography>}
      <ul className={classes.list}>
        <DynamicShowMoreArea>
          {listData.map(({ link, comic, params }) => (
            <ComicIndexListItem
              key={link.pathname}
              link={link}
              comic={comic}
              series={params.series}
              skipArcColorTooltip={skipArcColorTooltip}
              skipDescription={skipDescription}
            />
          ))}
        </DynamicShowMoreArea>
      </ul>
    </div>
  );
}

export const MemoizedListIndex = memo(ComicListIndex);

export default MemoizedListIndex;
