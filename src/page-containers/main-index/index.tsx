import React, { useEffect, useMemo, useState } from "react";
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
  const [sorting, setSorting] = useState(sortingEnum.READING_ORDER);
  const [sortingDirection, setSortingDirection] = useState(
    sortingDirectionEnum.ASC
  );
  const [currentIssues, setCurrentIssues] = useState(allIssues);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 250);

  useEffect(() => {
    setCurrentIssues(
      allIssues.filter((issue) => {
        const lowercaseSearchTerm = debouncedSearchTerm.toLowerCase();
        const inTitle = issue.comic.frontMatter.title
          .toLowerCase()
          .includes(lowercaseSearchTerm);
        const inDescription = issue.comic.description
          .toLowerCase()
          .includes(lowercaseSearchTerm);
        return inDescription || inTitle;
      })
    );
  }, [debouncedSearchTerm]);

  function onFilterUpdate({ target }) {
    const newFilter = target.value;
    setSearchTerm(newFilter);
  }

  const comicGroupings = useMemo(
    () => getGroupedComics(currentIssues, readingOrder),
    [currentIssues]
  );
  const groupedComics = comicGroupings[sorting];
  const sortedGroupedComics = useMemo(
    () => getSortedData(groupedComics, readingOrder, sorting),
    [sorting, groupedComics]
  );

  // // Separate useMemo so we don't have to redo sorting function if only direction changes
  const { directionalSortedGroupedComics, groupOrder } = useMemo(
    () =>
      getDirectionallySortedData(
        sortedGroupedComics,
        sortingDirection,
        sorting
      ),
    [sortingDirection, sorting, sortedGroupedComics]
  );

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
          {groupOrder.length > 1 && (
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
      {groupOrder.map((key) => (
        <MemoizedListSection
          key={key}
          groupData={directionalSortedGroupedComics[key]}
          headerLabel={key}
        />
      ))}
    </>
  );
};

export default MainIndex;
