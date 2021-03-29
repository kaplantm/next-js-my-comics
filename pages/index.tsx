import React, { useMemo, useState } from "react";
import ListIndex from "@page-containers/list-index";
import {
  getIssueData,
  getIssueNumbers,
  getReadingOrder,
  getSeriesTitles,
} from "@lib/utils/static-generation-utils";
import { getIssueRoute } from "@lib/constants/routes";
import { Box, Button, ButtonGroup, Grid } from "@material-ui/core";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

enum sortingEnum {
  READING_ORDER = "My Reading Order",
  YEAR = "Year Published",
  SERIES = "Series",
}

enum sortingDirectionEnum {
  ASC = "asc",
  DESC = "desc",
}

const getSortByReadingOrder = (readingOrder) => (a, b) => {
  const readingOrderPathA = a.link.pathname.split("/series/")[1];
  const readingOrderPathB = b.link.pathname.split("/series/")[1];
  const readingOrderIndexA = readingOrder.indexOf(readingOrderPathA);
  const readingOrderIndexB = readingOrder.indexOf(readingOrderPathB);

  if (readingOrderIndexA === -1) {
    return 1;
  }
  return readingOrderIndexA - readingOrderIndexB;
};

const sortByYear = (a, b) => {
  const yearA = a.comic.frontMatter.startYear || 0;
  const yearB = b.comic.frontMatter.startYear || 0;

  return yearA - yearB;
};

const getGroupedBySeries = (data) => {
  const grouped = data.reduce((acc, value) => {
    const series = value.link.pathname
      .split("/series/")[1]
      .split("/issues/")[0];
    if (!acc[series]) {
      acc[series] = [value];
    } else {
      acc[series].push(value);
    }
    return acc;
  }, []);
  return {
    sortedListData: Object.values(grouped),
    groups: Object.keys(grouped),
  };
};

const getSortedData = (listData, readingOrder, sorting) => {
  const sortedData = [...listData];
  switch (sorting) {
    case sortingEnum.READING_ORDER:
      return {
        sortedListData: [sortedData.sort(getSortByReadingOrder(readingOrder))],
        groups: [],
      };
    case sortingEnum.YEAR:
      return { sortedListData: [sortedData.sort(sortByYear)], groups: [] };
    case sortingEnum.SERIES:
      return getGroupedBySeries(sortedData);
    default:
      return { sortedListData: [sortedData], groups: [] };
  }
};

const getDirectionalSortedData = (listData, groups, sortingDirection) => {
  const clone = listData.map((data) => data.map((value) => value)); // clone two levels deep in array
  const groupsClone = [...groups];
  if (sortingDirection === sortingDirectionEnum.ASC) {
    return { sortedDirectionalListData: clone, sortedGroups: groupsClone };
  }
  return {
    sortedDirectionalListData: groups.length
      ? clone.reverse()
      : clone.map((group) => group.reverse()),
    sortedGroups: groupsClone.reverse(),
  };
};

//  move into page containers
const IndexPage = ({ listData, readingOrder }) => {
  const [sorting, setSorting] = useState(sortingEnum.READING_ORDER);
  const [sortingDirection, setSortingDirection] = useState(
    sortingDirectionEnum.ASC
  );

  const { sortedListData, groups } = useMemo(
    () => getSortedData(listData, readingOrder, sorting),
    [sorting]
  );

  // Separate useMemo so we don't have to redo sorting function if only direction changes
  const { sortedDirectionalListData, sortedGroups } = useMemo(
    () => getDirectionalSortedData(sortedListData, groups, sortingDirection),
    [sortingDirection, sortedListData, sorting]
  );

  console.log({
    listData: listData.map((value) => value.comic.frontMatter.startYear),
    sortedListData: sortedDirectionalListData[0].map(
      (value) => value.comic.frontMatter.startYear
    ),
    sortedDirectionalListData: sortedDirectionalListData[0].map(
      (value) => value.comic.frontMatter.startYear
    ),
    sortingDirection,
    sorting,
  });

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
      {sortedDirectionalListData.map((listData, index) => (
        <Box mt={3} key={`${sorting}${sortedGroups[index]}`}>
          <ListIndex listData={listData} headerLabel={sortedGroups[index]} />
        </Box>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const readingOrder = await getReadingOrder();
  const seriesTitles = await getSeriesTitles();
  const allIssues = (
    await Promise.all(
      seriesTitles.map(async (series) => {
        const issueNumbers = await getIssueNumbers(series);
        return await Promise.all(
          issueNumbers.map(async (issueNumber) => {
            const comic = await getIssueData(series, issueNumber);
            return {
              link: {
                pathname: getIssueRoute(series, issueNumber),
                name: `${series} #${issueNumber} - ${comic.frontMatter.title}`,
              },
              comic,
            };
          })
        );
      })
    )
  ).flat();

  return {
    props: {
      listData: allIssues,
      readingOrder,
    },
  };
};

export default IndexPage;
