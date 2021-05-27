import { memo } from 'react';
import { MemoizedListIndex } from '@page-containers/comic-list-index/index';
import { isAOneShot } from '@lib/constants';
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
  const classes = useStyles();
  if (!groupData.issues.length) {
    return null;
  }
  const listData = Object.values(groupData.issues).map(item => ({
    ...item,
    link: {
      pathname: item.link.pathname,
      name: `${isAOneShot(item.params.series) ? '' : item.params.series} ${
        item.link.name
      }`,
    },
  }));

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
