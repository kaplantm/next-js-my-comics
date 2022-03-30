/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { memo, useEffect, useMemo, useState } from 'react';
import { Box, Button, ButtonGroup, Grid } from '@material-ui/core';
import useDebounce from '@lib/hooks/use-debounce';
import AppTextField from '@components/form-inputs/app-text-field';
import { useRouter } from 'next/router';
import { getReadingOrderRoute } from '@lib/constants/routes';
import { pushCurrentPageWithUpdatedQueryParams } from '@lib/utils';
import MemoizedListSection from './list-section';
import {
  sortingEnum,
  sortingDirectionEnum,
  GroupedComicsType,
  getDirectionallySortedData,
  sortingEnumValues,
} from './helpers';

const AllSections = ({
  groupsState,
}: {
  groupsState: { groups: GroupedComicsType; order: string[] };
}) => (
  <>
    {groupsState.order.map(key => (
      <MemoizedListSection
        key={key}
        groupData={groupsState.groups[key]}
        headerLabel={key}
      />
    ))}
  </>
);
const AllSectionsMemo = memo(AllSections);

const SearchResults = ({
  groupData,
  debouncedSearchTerm,
  sorting,
}: {
  groupData: { groups: GroupedComicsType; order: string[] };
  debouncedSearchTerm: string;
  sorting: sortingEnum;
}) => {
  const [groupsState, setGroupsState] = useState(groupData);
  const [searchReady, setSearchReady] = useState(false);
  const router = useRouter();
  const routerIsReady = router.isReady;
  const groupKeys = useMemo(() => Object.keys(groupData.groups), [
    groupData.groups,
  ]);

  useEffect(() => {
    if (debouncedSearchTerm !== null && routerIsReady) {
      const lowercaseSearchTerm = (debouncedSearchTerm || '').toLowerCase();
      const filtered = lowercaseSearchTerm
        ? groupKeys.reduce((acc, key) => {
            acc[key] = {
              comic: null,
              link: null,
              params: null,
              issues: groupData.groups[key].issues.filter(issue => {
                const inArc = (issue.comic.frontMatter.arc || '')
                  .toLowerCase()
                  .includes(lowercaseSearchTerm);
                const inSeries = (issue.params.series || '')
                  .toLowerCase()
                  .includes(lowercaseSearchTerm);
                const inTitle = issue.comic.frontMatter.title
                  .toLowerCase()
                  .includes(lowercaseSearchTerm);
                const inDescription = issue.comic.description
                  .toLowerCase()
                  .includes(lowercaseSearchTerm);
                const inNumber = `${
                  issue.comic.frontMatter.issueNumber || ''
                }`.includes(lowercaseSearchTerm);
                return (
                  inDescription || inTitle || inNumber || inArc || inSeries
                );
              }),
            };
            return acc;
          }, {})
        : groupData.groups;
      const { groups: newGroups, order: newOrder } = getDirectionallySortedData(
        filtered,
        sortingDirectionEnum.ASC,
        sorting
      );
      setGroupsState({
        groups: newGroups,
        order: newOrder,
      });
      setSearchReady(prev => prev || true);
    }
  }, [
    routerIsReady,
    debouncedSearchTerm,
    sorting,
    groupData.groups,
    groupKeys,
  ]);

  return searchReady ? <AllSectionsMemo groupsState={groupsState} /> : null;
};

const SearchResultsMemo = memo(SearchResults);

const MainIndex = ({
  sorting = sortingEnum.READING_ORDER,
  groupData,
}: {
  groupData: {
    groups: GroupedComicsType;
    order: string[];
  };
  sorting: sortingEnum;
}) => {
  const router = useRouter();
  const searchTermParam = router?.query?.searchTerm || '';
  const [searchTerm, setSearchTerm] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 250);

  useEffect(() => {
    if (router.isReady && searchTerm === null) {
      setSearchTerm((searchTermParam as string) || '');
    } else if (searchTerm != null && searchTerm !== searchTermParam) {
      pushCurrentPageWithUpdatedQueryParams(
        { searchTerm: searchTerm || undefined },
        { shallow: true }
      );
    }
  }, [router.isReady, searchTermParam, searchTerm]);

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
      <Box mb={3}>
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
      {/* TODO: now flicker */}
      <SearchResultsMemo
        groupData={groupData}
        debouncedSearchTerm={debouncedSearchTerm}
        sorting={sorting}
      />
      {/* {searchReady && <SearchResults groupsState={groupsState} />} */}
    </>
  );
};

export default MainIndex;
