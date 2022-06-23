import {
  GroupedComicsType,
  sortingEnum,
} from '@page-containers/main-index/helpers';
import { useMemo } from 'react';

export const useFilteredData = (
  routerIsReady: boolean,
  debouncedSearchTerm: string | null,
  sorting: sortingEnum,
  groups: GroupedComicsType,
  startTransition: any
) => {
  const groupKeys = useMemo(() => Object.keys(groups), [groups]);
  const filtered: GroupedComicsType = useMemo(() => {
    const ready = debouncedSearchTerm?.length >= 3 && routerIsReady;
    if (!ready) {
      return groups;
    }
    const lowercaseSearchTerm = (debouncedSearchTerm || '').toLowerCase();
    const filtering = lowercaseSearchTerm
      ? groupKeys.reduce((acc, key) => {
          acc[key] = {
            comic: null,
            link: null,
            params: null,
            issues: groups[key].issues.filter(issue => {
              const inArc = (issue.comic.frontMatter.arc || '')
                .toLowerCase()
                .includes(lowercaseSearchTerm);
              const inSeries = (issue.params.series || '')
                .toLowerCase()
                .includes(lowercaseSearchTerm);
              const inTitle = issue.comic.frontMatter.title
                .toLowerCase()
                .includes(lowercaseSearchTerm);
              const inDescription = issue.comic.description
                .toLowerCase()
                .includes(lowercaseSearchTerm);
              const inNumber = `${
                issue.comic.frontMatter.issueNumber || ''
              }`.includes(lowercaseSearchTerm);
              return inDescription || inTitle || inNumber || inArc || inSeries;
            }),
          };
          return acc;
        }, {})
      : groups;
    return filtering;
  }, [groups, debouncedSearchTerm, groupKeys]);
};

export default useFilteredData;
