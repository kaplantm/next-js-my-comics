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
import { allStaticComicsType } from "@lib/types";
import MemoizedListSection from "./list-section";

const MainIndex = ({
  allComics,
  readingOrder,
}: {
  allComics: allStaticComicsType;
  readingOrder: string[];
}) => {
  const [sorting, setSorting] = useState(sortingEnum.READING_ORDER);
  const [sortingDirection, setSortingDirection] = useState(
    sortingDirectionEnum.ASC
  );

  const comicGroupings = useMemo(
    () => getGroupedComics(allComics, readingOrder),
    []
  );
  const groupedComics = comicGroupings[sorting];
  const sortedGroupedComics = useMemo(
    () => getSortedData(groupedComics, readingOrder, sorting),
    [sorting]
  );

  // // Separate useMemo so we don't have to redo sorting function if only direction changes
  const { directionalSortedGroupedComics, groupOrder } = useMemo(
    () => getDirectionallySortedData(sortedGroupedComics, sortingDirection),
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
        </Grid>
      </Box>
      {groupOrder.map((key, index) => (
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
