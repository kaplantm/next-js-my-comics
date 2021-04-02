import {
  allStaticComicsType,
  allStaticComicsSeriesType,
  ComicWithParamsType,
  ComicType,
} from "@lib/types";

export type allStaticComicsWithListIssuesType = Omit<
  allStaticComicsSeriesType,
  "issues"
> & {
  issues: ComicWithParamsType[];
};

export type allStaticComicsTypeWithListIssues = {
  [seriesTitle: string]: allStaticComicsWithListIssuesType;
};

export enum sortingEnum {
  READING_ORDER = "My Reading Order",
  YEAR = "Date",
  ARC = "Arc",
}

export enum sortingDirectionEnum {
  ASC = "asc",
  DESC = "desc",
}

export const getSortByReadingOrder = (readingOrder) => (
  a: ComicWithParamsType,
  b: ComicWithParamsType
) => {
  const readingOrderPathA = `${a.params.series}/issues/${a.params.issueNumber}`;
  const readingOrderPathB = `${b.params.series}/issues/${b.params.issueNumber}`;
  const readingOrderIndexA = readingOrder.indexOf(readingOrderPathA);
  const readingOrderIndexB = readingOrder.indexOf(readingOrderPathB);

  if (readingOrderIndexA === -1) {
    return 1;
  }
  return readingOrderIndexA - readingOrderIndexB;
};

export const sortByDate = (a, b) => {
  const dateValueA = typeof a === "string" ? new Date(a) : new Date(a, 0, 1);
  const dateValueB = typeof b === "string" ? new Date(b) : new Date(b, 0, 1);
  return dateValueA.getTime() - dateValueB.getTime();
};

export const getSortByDateFrontMatterKey = (numericKey: "end" | "start") => (
  a,
  b
) => {
  const valueA = a.comic.frontMatter[numericKey] || 0;
  const valueB = b.comic.frontMatter[numericKey] || 0;

  return sortByDate(valueA, valueB);
};

export const getSortByNumericFrontMatterKey = (numericKey: "issueNumber") => (
  a,
  b
) => {
  const valueA = a.comic.frontMatter[numericKey] || 0;
  const valueB = b.comic.frontMatter[numericKey] || 0;

  return valueA - valueB;
};

const sortComicGroupIssues = (
  comicGroups: allStaticComicsTypeWithListIssues,
  sortFunction: (a, b) => number
) => {
  const keys = Object.keys(comicGroups);
  return keys.reduce((acc, key) => {
    const issuesClone = [...comicGroups[key].issues];
    acc[key] = { ...comicGroups[key], issues: issuesClone.sort(sortFunction) };
    return acc;
  }, {});
};

export const getSortedData = (
  comicGroups: allStaticComicsTypeWithListIssues,
  readingOrder: string[],
  sorting: sortingEnum
) => {
  const keys = Object.keys(comicGroups);
  const comicGroupsSortedKeys = keys.reduce((acc, key) => {
    acc[key] = comicGroups[key];
    return acc;
  }, {});
  switch (sorting) {
    case sortingEnum.READING_ORDER:
      return sortComicGroupIssues(
        comicGroupsSortedKeys,
        getSortByReadingOrder(readingOrder)
      );
    case sortingEnum.YEAR:
      return sortComicGroupIssues(
        comicGroupsSortedKeys,
        getSortByDateFrontMatterKey("start")
      );
    case sortingEnum.ARC:
      return sortComicGroupIssues(
        comicGroupsSortedKeys,
        getSortByNumericFrontMatterKey("issueNumber")
      );
    default:
      return comicGroupsSortedKeys;
  }
};

export const getDirectionallySortedData = (
  comicGroups: allStaticComicsTypeWithListIssues,
  sortingDirection: sortingDirectionEnum,
  sorting
) => {
  const keySorter = sorting === sortingEnum.YEAR ? sortByDate : undefined;
  const keys = Object.keys(comicGroups).sort(keySorter);
  if (sortingDirection === sortingDirectionEnum.ASC) {
    // Exported a separate map for key order here since objects are not inherently ordered
    return { directionalSortedGroupedComics: comicGroups, groupOrder: keys };
  }
  const reverseKeys = keys.reverse();
  if (keys.length > 1) {
    // If we have more than one key then only reverse the keys, not their content
    return {
      directionalSortedGroupedComics: keys.reduce((acc, key) => {
        acc[key] = comicGroups[key];
        return acc;
      }, {}),
      groupOrder: reverseKeys,
    };
  }
  // Reverse the issue order
  const directionalSortedGroupedComics = keys.reduce((acc, key) => {
    const oldValue = comicGroups[key];
    acc[key] = { ...oldValue, issues: [...oldValue.issues].reverse() };
    return acc;
  }, {});
  return { directionalSortedGroupedComics, groupOrder: reverseKeys };
};

const groupIssuesBy = (
  issues: ComicWithParamsType[],
  frontMatterKey: keyof ComicType["frontMatter"]
) =>
  issues.reduce((acc, val) => {
    const key = val.comic.frontMatter[frontMatterKey] || "Unknown";
    if (acc[key] && acc[key].issues) {
      acc[key].issues.push(val);
    } else {
      acc[key] = { issues: [val] };
    }
    return acc;
  }, {});

const groupIssuesByReadingOrder = (
  issues: ComicWithParamsType[],
  readingOrder: string[]
) =>
  issues.reduce(
    (acc, val) => {
      const readingOrderPath = `${val.params.series}/issues/${val.params.issueNumber}`;
      if (readingOrder.indexOf(readingOrderPath) !== -1) {
        acc["My Reading Order"].issues.push(val);
      } else {
        acc["Untracked"].issues.push(val);
      }
      return acc;
    },
    {
      "My Reading Order": { issues: [], params: null, comic: null },
      Untracked: { issues: [], params: null, comic: null },
    }
  );

export const getGroupedComics = (
  allIssues: ComicWithParamsType[],
  readingOrder: string[]
): {
  [key in sortingEnum]: allStaticComicsTypeWithListIssues;
} => {
  return {
    [sortingEnum.YEAR]: groupIssuesBy(allIssues, "start"),
    [sortingEnum.ARC]: groupIssuesBy(allIssues, "arc"),
    [sortingEnum.READING_ORDER]: groupIssuesByReadingOrder(
      allIssues,
      readingOrder
    ),
  };
};
