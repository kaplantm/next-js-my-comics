import React, { useEffect, useMemo, useRef, useState } from "react";
import { Box, Button, ButtonGroup, Grid } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import {
  sortingEnum,
  sortingDirectionEnum,
  getSortedData,
  getDirectionallySortedData,
  getGroupedComics,
} from "./helpers";
import { ComicWithMetadata } from "@lib/types";
import MemoizedListSection from "./list-section";
import useDebounce from "@lib/hooks/use-debounce";
import AppTextField from "@components/form-inputs/app-text-field";

const MainIndex = ({
  allIssues,
  readingOrder,
}: {
  allIssues: ComicWithMetadata[];
  readingOrder: string[];
}) => {
  const groupedComicsRef = useRef(getGroupedComics(allIssues, readingOrder));
  const [sorting, setSorting] = useState(sortingEnum.READING_ORDER);
  const [sortingDirection, setSortingDirection] = useState(
    sortingDirectionEnum.ASC
  );
  const [groups, setGroups] = useState(() => {
    const {
      directionalSortedGroupedComics,
      groupOrder,
    } = getDirectionallySortedData(
      groupedComicsRef.current[sorting],
      sortingDirection,
      sorting
    );
    return { groups: directionalSortedGroupedComics, order: groupOrder };
  });
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 250);

  useEffect(() => {
    const lowercaseSearchTerm = debouncedSearchTerm.toLowerCase();
    const allInCurrentSorting = groupedComicsRef.current[sorting];
    const filtered = lowercaseSearchTerm
      ? Object.keys(allInCurrentSorting).reduce((acc, key) => {
          acc[key] = {
            comic: null,
            link: null,
            params: null,
            issues: allInCurrentSorting[key].issues.filter((issue) => {
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
      : allInCurrentSorting;

    const {
      directionalSortedGroupedComics,
      groupOrder,
    } = getDirectionallySortedData(filtered, sortingDirection, sorting);

    setGroups({
      groups: directionalSortedGroupedComics,
      order: groupOrder,
    });
  }, [debouncedSearchTerm, sorting, sortingDirection]);

  function onFilterUpdate({ target }) {
    const newFilter = target.value;
    setSearchTerm(newFilter);
  }

  function handleSortingUpdate(sorting: sortingEnum) {
    return () => setSorting(sorting);
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
              {Object.values(sortingEnum).map((sort) => (
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
          {groups.order.length > 1 && (
            <Grid item>
              <ButtonGroup
                color="primary"
                aria-label="outlined primary button group"
              >
                {Object.values(sortingDirectionEnum).map((direction) => (
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
      {groups.order.map((key) => (
        <MemoizedListSection
          key={key}
          groupData={groups.groups[key]}
          headerLabel={key}
        />
      ))}
    </>
  );
};

export default MainIndex;
