/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react';
import { Box, Button, ButtonGroup, Grid } from '@material-ui/core';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import useDebounce from '@lib/hooks/use-debounce';
import AppTextField from '@components/form-inputs/app-text-field';
import { useRouter } from 'next/router';
import { getReadingOrderRoute } from '@lib/constants/routes';
import MemoizedListSection from './list-section';
import {
  sortingEnum,
  sortingDirectionEnum,
  GroupedComicsType,
  getDirectionallySortedData,
} from './helpers';

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
  const [groupsState, setGroupsState] = useState(groupData);
  const [sortingDirection, setSortingDirection] = useState(
    sortingDirectionEnum.ASC
  );
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 250);

  useEffect(() => {
    const lowercaseSearchTerm = debouncedSearchTerm.toLowerCase();
    const filtered = lowercaseSearchTerm
      ? Object.keys(groupData.groups).reduce((acc, key) => {
          acc[key] = {
            comic: null,
            link: null,
            params: null,
            issues: groupData.groups[key].issues.filter(issue => {
              const inTitle = issue.comic.frontMatter.title
                .toLowerCase()
                .includes(lowercaseSearchTerm);
              const inDescription = issue.comic.description
                .toLowerCase()
                .includes(lowercaseSearchTerm);
              return inDescription || inTitle;
            }),
          };
          return acc;
        }, {})
      : groupData.groups;

    const { groups: newGroups, order: newOrder } = getDirectionallySortedData(
      filtered,
      sortingDirection,
      sorting
    );

    setGroupsState({
      groups: newGroups,
      order: newOrder,
    });
  }, [debouncedSearchTerm, sorting, sortingDirection, groupData.groups]);

  function onFilterUpdate({ target }) {
    const newFilter = target.value;
    setSearchTerm(newFilter);
  }

  function handleSortingUpdate(newSorting: sortingEnum) {
    const route = getReadingOrderRoute(newSorting);
    return () => router.push(route);
  }

  function handleSortingDirectionUpdate(direction: sortingDirectionEnum) {
    return () => setSortingDirection(direction);
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
              {Object.values(sortingEnum).map(sort => (
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
          {groupsState.order.length > 1 && (
            <Grid item>
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
              >
                {Object.values(sortingDirectionEnum).map(direction => (
                  <Button
                    key={direction}
                    disabled={sortingDirection === direction}
                    onClick={handleSortingDirectionUpdate(direction)}
                  >
                    {direction === sortingDirectionEnum.ASC ? (
                      <ArrowUpward />
                    ) : (
                      <ArrowDownward />
                    )}
                  </Button>
                ))}
              </ButtonGroup>
            </Grid>
          )}
          <Grid item xs={12}>
            <AppTextField
              label="Search"
              variant="outlined"
              onChange={onFilterUpdate}
              value={searchTerm}
            />
          </Grid>
        </Grid>
      </Box>
      {groupsState.order.map(key => (
        <MemoizedListSection
          key={key}
          groupData={groupsState.groups[key]}
          headerLabel={key}
        />
      ))}
    </>
  );
};

export default MainIndex;
