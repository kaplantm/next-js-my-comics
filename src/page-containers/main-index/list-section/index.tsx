import { memo } from 'react';
import { Box } from '@material-ui/core';
import { MemoizedListIndex } from '@page-containers/comic-list-index/index';
import { isAOneShot } from '@lib/constants';
import { ComicWithMetadataListIssuesType } from '../helpers';
import useStyles from './use-styles';

const ListSection = ({
  groupData,
  headerLabel,
}: {
  groupData: ComicWithMetadataListIssuesType;
  headerLabel: string;
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
      <MemoizedListIndex listData={listData} headerLabel={headerLabel} />
    </div>
  );
};

export default memo(ListSection);
