import { isAOneShot } from '@lib/constants';
import { ComicWithMetadata, ComicType } from '@lib/types';
import { parseDateFromMarkdownString } from '@lib/utils/string-utils';

export type ComicWithMetadataListIssuesType = Omit<
  ComicWithMetadata,
  'issues'
> & {
  issues: ComicWithMetadata[];
};

export type GroupedComicsType = {
  [key: string]: ComicWithMetadataListIssuesType;
};

export enum sortingEnum {
  READING_ORDER = 'My Reading Order',
  YEAR = 'Date',
  ARC = 'Arc',
}
export const sortingEnumValues = Object.values(sortingEnum);

export enum sortingDirectionEnum {
  ASC = 'asc',
  DESC = 'desc',
}

export const getSortByReadingOrder = readingOrder => (
  a: ComicWithMetadata,
  b: ComicWithMetadata
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
  const dateValueA = parseDateFromMarkdownString(a);
  const dateValueB = parseDateFromMarkdownString(b);
  return dateValueA.getTime() - dateValueB.getTime();
};

export const getSortByNumericFrontMatterKey = (numericKey: 'issueNumber') => (
  a,
  b
) => {
  const valueA = a.comic.frontMatter[numericKey] || 0;
  const valueB = b.comic.frontMatter[numericKey] || 0;

  return valueA - valueB;
};

const sortComicGroupIssues = (
  comicGroups: GroupedComicsType,
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

const groupIssuesBy = (
  issues: ComicWithMetadata[],
  frontMatterKey: keyof ComicType['frontMatter'],
  fallbackKey = 'Unknown'
): GroupedComicsType =>
  issues.reduce((acc, val) => {
    const key = val.comic.frontMatter[frontMatterKey] || fallbackKey;
    if (acc[key] && acc[key].issues) {
      acc[key].issues.push(val);
    } else {
      acc[key] = { issues: [val] };
    }
    return acc;
  }, {});
