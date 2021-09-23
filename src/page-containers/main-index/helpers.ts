/* eslint-disable import/prefer-default-export */
import { ComicType, extendedComicIssue } from '@lib/types';
import { getMonthYear } from '@lib/utils/date-utils';
import { parseDateFromMarkdownString } from '@lib/utils/string-utils';

// export type extendedComicIssueListIssuesType = Omit<
//   extendedComicIssue,
//   'issues'
// > & {
//   issues: extendedComicIssue[];
// };

export type GroupedComicsType = {
  [key: string]: { issues: extendedComicIssue[] };
};

export enum sortingEnum {
  READING_ORDER = 'My Reading Order',
  YEAR = 'Date',
  ARC = 'Arc',
}

export enum sortingDirectionEnum {
  ASC = 'asc',
  DESC = 'desc',
}

export const getSortByReadingOrder = readingOrder => (
  a: extendedComicIssue,
  b: extendedComicIssue
) => {
  const readingOrderPathA = `${a.series.title}/issues/${a.number}`;
  const readingOrderPathB = `${b.series.title}/issues/${b.number}`;
  const readingOrderIndexA = readingOrder.indexOf(readingOrderPathA);
  const readingOrderIndexB = readingOrder.indexOf(readingOrderPathB);

  if (readingOrderIndexA === -1) {
    return 1;
  }
  return readingOrderIndexA - readingOrderIndexB;
};

export const sortByDate = (a, b) => {
  const dateValueA = parseDateFromMarkdownString(a);
  const dateValueB = parseDateFromMarkdownString(b);
  return dateValueA.getTime() - dateValueB.getTime();
};

// export const getSortByDateFrontMatterKey = (numericKey: 'end' | 'start') => (
//   a,
//   b
// ) => {
//   const valueA = a.comic.frontMatter[numericKey] || 0;
//   const valueB = b.comic.frontMatter[numericKey] || 0;

//   return sortByDate(valueA, valueB);
// };

// export const getSortByNumericFrontMatterKey = (numericKey: 'issueNumber') => (
//   a,
//   b
// ) => {
//   const valueA = a.comic.frontMatter[numericKey] || 0;
//   const valueB = b.comic.frontMatter[numericKey] || 0;

//   return valueA - valueB;
// };

const sortComicGroupIssues = (
  comicGroups: GroupedComicsType,
  sortFunction: (a, b) => number
) => {
  console.log({ comicGroups });
  const keys = Object.keys(comicGroups);
  return keys.reduce((acc, key) => {
    const issuesClone = [...comicGroups[key].issues];
    acc[key] = { ...comicGroups[key], issues: issuesClone.sort(sortFunction) };
    return acc;
  }, {});
};

export const getSortedData = (
  comicGroups: GroupedComicsType,
  readingOrder: string[]
) => {
  const keys = Object.keys(comicGroups);
  const comicGroupsSortedKeys = keys.reduce((acc, key) => {
    acc[key] = comicGroups[key];
    return acc;
  }, {});
  return sortComicGroupIssues(
    comicGroupsSortedKeys,
    getSortByReadingOrder(readingOrder)
  );
};

export const getDirectionallySortedData = (
  comicGroups: GroupedComicsType,
  sortingDirection: sortingDirectionEnum,
  sorting
) => {
  const keySorter = sorting === sortingEnum.YEAR ? sortByDate : undefined;
  const keys = Object.keys(comicGroups).sort(keySorter);
  if (sortingDirection === sortingDirectionEnum.ASC) {
    // Exported a separate map for key order here since objects are not inherently ordered
    return {
      groups: comicGroups,
      order: keys.filter(key => comicGroups[key].issues.length),
    };
  }
  const reverseKeys = keys.reverse();
  if (keys.length > 1) {
    // If we have more than one key then only reverse the keys, not their content
    return {
      groups: keys.reduce((acc, key) => {
        acc[key] = comicGroups[key];
        return acc;
      }, {}),
      order: reverseKeys,
    };
  }
  // Reverse the issue order
  const directionalSortedGroupedComics = keys.reduce((acc, key) => {
    const oldValue = comicGroups[key];
    acc[key] = { ...oldValue, issues: [...oldValue.issues].reverse() };
    return acc;
  }, {});
  return { groups: directionalSortedGroupedComics, order: reverseKeys };
};

const getCoverDateFromIssue = (issue: extendedComicIssue) =>
  getMonthYear(issue.coverDate);

const getArcTitleFromIssue = (issue: extendedComicIssue) => issue?.arc?.title;

const groupIssuesBy = (
  issues: extendedComicIssue[],
  valueGetter: (issue: extendedComicIssue) => string,
  fallbackKey = 'Unknown'
): GroupedComicsType =>
  issues.reduce((acc, issue) => {
    const key = valueGetter(issue) || fallbackKey;
    if (acc[key] && acc[key].issues) {
      acc[key].issues.push(issue);
    } else {
      acc[key] = { issues: [issue] };
    }
    return acc;
  }, {});

const groupIssuesByReadingOrder = (
  issues: extendedComicIssue[],
  readingOrder: string[]
): GroupedComicsType =>
  issues.reduce(
    (acc, val) => {
      const readingOrderPath = `${val.series.title}/issues/${val.number}`;
      if (readingOrder.indexOf(readingOrderPath) !== -1) {
        acc['My Reading Order'].issues.push(val);
      } else {
        acc.Untracked.issues.push(val);
      }
      return acc;
    },
    {
      'My Reading Order': { issues: [], params: null, link: null, comic: null },
      Untracked: { issues: [], params: null, link: null, comic: null },
    }
  );

export const getGroupedComics = (
  allIssues: extendedComicIssue[],
  readingOrder: string[],
  sorting: sortingEnum
): GroupedComicsType => {
  switch (sorting) {
    case sortingEnum.ARC:
      return getSortedData(
        groupIssuesBy(allIssues, getArcTitleFromIssue, 'No Arc / Unknown'),
        readingOrder
      );
    case sortingEnum.YEAR:
      return getSortedData(
        groupIssuesBy(allIssues, getCoverDateFromIssue),
        readingOrder
      );
    case sortingEnum.READING_ORDER:
    default:
      return getSortedData(
        groupIssuesByReadingOrder(allIssues, readingOrder),
        readingOrder
      );
  }
};
