import React, { useState, memo } from 'react';
import { Grid } from '@mui/material';
import { ComicType, MappedRouteType } from '@lib/types';
import dynamic from 'next/dynamic';
import useStyles from './use-styles';
import MemoTitle from './title';

const MemoCollapsibleDescription = dynamic(() => import('./description'));

const ComicIndexListItem = ({
  link,
  comic,
  skipArcColorTooltip,
  skipDescription,
  series,
}: {
  link: MappedRouteType;
  comic: ComicType;
  skipArcColorTooltip: boolean;
  skipDescription: boolean;
  series: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const { classes } = useStyles();

  function toggleExpanded() {
    setExpanded(prev => !prev);
  }

  return (
    <Grid item xs={12} component="li" className={classes.listItem}>
      {/* TODO: now add series to this title */}
      <MemoTitle
        series={series}
        arc={comic.frontMatter.arc}
        skipArcColorTooltip={skipArcColorTooltip}
        linkPath={link.pathname}
        linkName={link.name}
        skipDescription={skipDescription}
        toggleExpanded={toggleExpanded}
        expanded={expanded}
      />
      {!skipDescription && (
        <MemoCollapsibleDescription
          linkPath={link.pathname}
          description={comic.description}
          expanded={expanded}
        />
      )}
    </Grid>
  );
};

export default memo(ComicIndexListItem);
