import React, { useMemo, useState } from "react";
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

  const comicGroupings = useMemo(
    () => getGroupedComics(allIssues, readingOrder),
    []
  );
  const groupedComics = comicGroupings[sorting];
  const sortedGroupedComics = useMemo(
    () => getSortedData(groupedComics, readingOrder, sorting),
    [sorting]
  );

  // // Separate useMemo so we don't have to redo sorting function if only direction changes
  const { directionalSortedGroupedComics, groupOrder } = useMemo(
    () =>
      getDirectionallySortedData(
        sortedGroupedComics,
        sortingDirection,
        sorting
      ),
    [sortingDirection, sorting]
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
