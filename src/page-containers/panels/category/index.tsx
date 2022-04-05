import React, { useState, useEffect } from 'react';
import { Typography, Grid } from '@mui/material';
import MasonryLayout from '@components/masonry-layout';
import AppTextField from '@components/form-inputs/app-text-field';
import useDebounce from '@lib/hooks/use-debounce';
import DebugLinksMemo from '@components/debug-links';
import { getPanelsCategoryRoute } from '@lib/constants/routes';

type PanelsProps = {
  params: { category: string };
  imagePaths: string[];
  filterable: boolean;
};

function Panels({ params, imagePaths, filterable }: PanelsProps) {
  const [currentImagePaths, setCurrentImagePaths] = useState(imagePaths);
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 250);

  useEffect(() => {
    setCurrentImagePaths(
      imagePaths.filter(path => {
        const fileName = path
          .split('/')
          .slice(-1)[0]
          .split('.')[0]
          .toLowerCase();
        return fileName.includes(debouncedSearchTerm.toLowerCase());
      })
    );
  }, [debouncedSearchTerm, imagePaths]);

  function onFilterUpdate({ target }) {
    const newFilter = target.value;
    setSearchTerm(newFilter);
  }

  return (
    <Grid container spacing={3}>
      <Grid item container xs={12} alignItems="center">
        <Typography variant="h1" className="capitalize">
          {params.category}{' '}
        </Typography>{' '}
        <DebugLinksMemo
          baseLink={getPanelsCategoryRoute(params.category)}
          noEdit
        />
      </Grid>

      {filterable && (
        <Grid item xs={12}>
          <AppTextField
            label="Search"
            variant="outlined"
            onChange={onFilterUpdate}
            value={searchTerm}
          />
        </Grid>
      )}

      <Grid item xs={12}>
        {!!currentImagePaths?.length && (
          <MasonryLayout images={currentImagePaths} />
        )}
      </Grid>
    </Grid>
  );
}

export default Panels;
