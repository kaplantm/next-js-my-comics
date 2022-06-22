/* eslint-disable import/prefer-default-export */
import { ComicWithMetadata } from '@lib/types';
import {
  getDirectionallySortedData,
  getGroupedComics,
  GroupedComicsType,
  sortingDirectionEnum,
  sortingEnum,
} from '@components/search-results/helpers';

export const getReadingOrderGroupData = ({
  allIssues,
  readingOrder,
  sorting,
}: {
  allIssues: ComicWithMetadata[];
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
