import { memo } from 'react';
import { MemoizedListIndex } from '@page-containers/comic-list-index/index';
import { isAOneShot } from '@lib/constants';
import useStyles from './use-styles';
import { GroupedComicsType } from '../helpers';

const ListSection = ({
  groupData,
  headerLabel,
  skipDescription,
  isIssueList,
}: {
  groupData: GroupedComicsType[keyof GroupedComicsType];
  headerLabel: string;
  skipDescription?: boolean;
  isIssueList?: boolean;
}) => {
  const classes = useStyles();
  if (!groupData) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <MemoizedListIndex
        listData={groupData.issues}
        headerLabel={headerLabel}
        skipDescription={skipDescription}
        isIssueList={isIssueList}
      />
    </div>
  );
};

export default memo(ListSection);
