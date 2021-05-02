import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import AppLink from '@components/app-link';
import { getPanelsCategoryRoute } from '@lib/constants/routes';
import useStyles from './use-styles';

export type PanelsIndexProps = {
  categories: string[];
};

function PanelsIndex({ categories }: PanelsIndexProps) {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.coverImageContainer}>
        <Typography variant="h1">Panel Collections</Typography>
        <ul>
          {categories.map(category => (
            <li key={category} className={classes.categoryLink}>
              <AppLink nextProps={{ href: getPanelsCategoryRoute(category) }}>
                {category}
              </AppLink>
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}

export default PanelsIndex;
