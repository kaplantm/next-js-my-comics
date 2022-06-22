/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react';
import { Box, Button, ButtonGroup, Grid } from '@mui/material';
import useDebounce from '@lib/hooks/use-debounce';
import AppTextField from '@components/form-inputs/app-text-field';
import { useRouter } from 'next/router';
import { getReadingOrderRoute } from '@lib/constants/routes';
import { pushCurrentPageWithUpdatedQueryParams } from '@lib/utils';
import { useQuery } from 'react-query';
import {
  sortingEnum,
  GroupedComicsType,
  sortingEnumValues,
} from '@components/search-results/helpers';
import dynamic from 'next/dynamic';

const SearchResults = dynamic(() => import('@components/search-results'));

type groupDataType = {
  groups: GroupedComicsType;
  order: string[];
};

const MainIndex = ({
  sorting = sortingEnum.READING_ORDER,
  groupData,
}: {
  groupData: groupDataType;
  sorting: sortingEnum;
}) => {
  const router = useRouter();
  const searchTermParam = router?.query?.searchTerm || '';
  const [searchTerm, setSearchTerm] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 250);
  const queryPath = '/data/all-data.json';
  const { data, error } = useQuery<groupDataType>(queryPath);

  useEffect(() => {
    if (router.isReady) {
      setSearchTerm(prev =>
        prev === searchTermParam ? prev : searchTermParam
      );
    }
  }, [searchTermParam, router.isReady]);

  useEffect(() => {
    if (router.isReady) {
      if (searchTerm != null) {
        pushCurrentPageWithUpdatedQueryParams(
          { searchTerm: searchTerm || undefined },
          { shallow: true }
        );
      }
    }
  }, [router.isReady, searchTerm]);

  function onFilterUpdate({ target }) {
    const newFilter = target.value;
    setSearchTerm(newFilter);
  }

  function handleSortingUpdate(newSorting: sortingEnum) {
    const route = getReadingOrderRoute(newSorting);
    return () => router.push(route);
  }

  return (
    <>
      <Box>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              {sortingEnumValues.map(sort => (
                <Button
                  key={sort}
                  disabled={sorting === sort}
                  onClick={handleSortingUpdate(sort)}
                >
                  {sort}
                </Button>
              ))}
            </ButtonGroup>
          </Grid>
          <Grid item xs={12}>
            <AppTextField
              label="Search"
              variant="outlined"
              onChange={onFilterUpdate}
              value={searchTerm || ''}
            />
          </Grid>
        </Grid>
      </Box>
      <SearchResults
        groupData={data && !error ? data : groupData}
        debouncedSearchTerm={debouncedSearchTerm}
        sorting={sorting}
      />
    </>
  );
};

export default MainIndex;
