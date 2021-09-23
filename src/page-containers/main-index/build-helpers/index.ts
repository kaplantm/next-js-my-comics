/* eslint-disable import/prefer-default-export */
import { ComicWithMetadata, extendedComicIssue } from '@lib/types';
import {
  getDirectionallySortedData,
  getGroupedComics,
  GroupedComicsType,
  sortingDirectionEnum,
  sortingEnum,
} from '../helpers';

export const getReadingOrderGroupData = ({
  allIssues,
  readingOrder,
  sorting,
}: {
  allIssues: extendedComicIssue[];
  readingOrder: string[];
  sorting: sortingEnum;
}): { groups: GroupedComicsType; order: string[] } => {
  const groupedComics = getGroupedComics(allIssues, readingOrder, sorting);
  return getDirectionallySortedData(
    groupedComics,
    sortingDirectionEnum.ASC,
    sorting
  );
};
