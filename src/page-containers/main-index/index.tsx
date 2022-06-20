/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from 'react';
import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Grid,
} from '@mui/material';
import useDebounce from '@lib/hooks/use-debounce';
import AppTextField from '@components/form-inputs/app-text-field';
import { useRouter } from 'next/router';
import { getReadingOrderRoute } from '@lib/constants/routes';
import { pushCurrentPageWithUpdatedQueryParams } from '@lib/utils';
import { useQuery } from 'react-query';
import MemoizedListSection from './list-section';
import {
  sortingEnum,
  sortingDirectionEnum,
  GroupedComicsType,
  getDirectionallySortedData,
  sortingEnumValues,
  getGroupedListData,
} from './helpers';

const AllSections = ({
  groupsState,
}: {
  groupsState: { groups: GroupedComicsType; order: string[] };
}) => (
  <>
    {groupsState.order.map(key => (
      <div key={key}>
        <MemoizedListSection
          key={key}
          groupData={groupsState.groups[key]}
          headerLabel={key}
        />
      </div>
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
  const [isPending, startTransition] = useTransition({
    timeoutMs: 3000,
  });

  const groupedListData = useMemo(() => getGroupedListData(groupData), [
    groupData,
  ]);

  useEffect(() => {
    if (
      (debouncedSearchTerm?.length >= 3 || debouncedSearchTerm === '') &&
      routerIsReady
    ) {
      const lowercaseSearchTerm = (debouncedSearchTerm || '').toLowerCase();
      const filtered = lowercaseSearchTerm
        ? groupKeys.reduce((acc, key) => {
            acc[key] = {
              comic: null,
              link: null,
              params: null,
              issues: groupedListData.groups[key].issues.filter(issue => {
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
        : groupedListData.groups;
      const { groups: newGroups, order: newOrder } = getDirectionallySortedData(
        filtered,
        sortingDirectionEnum.ASC,
        sorting
      );

      startTransition(() => {
        setGroupsState({
          groups: newGroups,
          order: newOrder,
        });
        setSearchReady(prev => prev || true);
      });
    }
  }, [
    routerIsReady,
    debouncedSearchTerm,
    sorting,
    groupedListData.groups,
    groupKeys,
    startTransition,
  ]);

  return searchReady ? (
    <>
      <Box display="flex" justifyItems="center" style={{ height: '2rem' }}>
        {isPending && <CircularProgress color="secondary" size="2rem" />}
      </Box>
      <AllSectionsMemo groupsState={groupsState} />
    </>
  ) : null;
};

const SearchResultsMemo = memo(SearchResults);

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
  const hasSynchedParamsWithEntry = useRef(false);
  const searchTermParam = router?.query?.searchTerm || '';
  const [searchTerm, setSearchTerm] = useState(null);
  const debouncedSearchTerm = useDebounce(searchTerm, 250);
  const queryPath = '/api/all-data.json';
  const { data, error } = useQuery<groupDataType>(queryPath);

  console.log('router', { router, ready: router.isReady });

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
      {/* TODO: now flicker */}
      <SearchResultsMemo
        groupData={data && !error ? data : groupData}
        debouncedSearchTerm={debouncedSearchTerm}
        sorting={sorting}
      />
      {/* {searchReady && <SearchResults groupsState={groupsState} />} */}
    </>
  );
};

export default MainIndex;
