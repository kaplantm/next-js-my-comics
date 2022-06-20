import { memo, useMemo } from 'react';
import { MemoizedListIndex } from '@page-containers/comic-list-index/index';
import { ComicWithMetadataListIssuesType } from '../helpers';
import useStyles from './use-styles';

const ListSection = ({
  groupData,
  headerLabel,
  skipDescription,
}: {
  groupData: ComicWithMetadataListIssuesType;
  headerLabel: string;
  skipDescription?: boolean;
}) => {
  const { classes } = useStyles();
  const listData = useMemo(() => Object.values(groupData.issues), [
    groupData.issues,
  ]);

  if (!groupData.issues.length) {
    return null;
  }

  return (
    <div className={classes.wrapper}>
      <MemoizedListIndex
        listData={listData}
        headerLabel={headerLabel}
        skipDescription={skipDescription}
      />
    </div>
  );
};

export default memo(ListSection);
