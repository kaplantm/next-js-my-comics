/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { memo, useMemo } from 'react';
import MemoizedListSection from './list-section';
import { GroupedComicsType } from './helpers';

const SearchResults = ({
  groupData,
  debouncedSearchTerm,
}: {
  groupData: { groups: GroupedComicsType; order: string[] };
  debouncedSearchTerm: string;
}) => {
  const lowercaseSearchTerm = useMemo(
    () => (debouncedSearchTerm || '').toLocaleLowerCase(),
    [debouncedSearchTerm]
  );

  const groupKeys = useMemo(() => Object.keys(groupData.groups), [
    groupData.groups,
  ]);

  return (
    <>
      {groupKeys.map(key => (
        <div key={key}>
          <MemoizedListSection
            key={key}
            groupData={groupData.groups[key]}
            filterTerm={lowercaseSearchTerm}
            headerLabel={key}
          />
        </div>
      ))}
    </>
  );
};

export default memo(SearchResults);
