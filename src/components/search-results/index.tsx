/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, {
  memo,
  useEffect,
  useMemo,
  useState,
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useTransition,
} from 'react';
import { Box, CircularProgress } from '@mui/material';
import { useRouter } from 'next/router';
import MemoizedListSection from './list-section';
import {
  sortingEnum,
  sortingDirectionEnum,
  GroupedComicsType,
  getDirectionallySortedData,
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

export default memo(SearchResults);
