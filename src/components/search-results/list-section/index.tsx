import { memo, useMemo } from 'react';
import { MemoizedListIndex } from '@page-containers/comic-list-index/index';
import { ComicWithMetadataListIssuesType } from '../helpers';
import useStyles from './use-styles';

const ListSection = ({
  groupData,
  headerLabel,
  skipDescription,
  filterTerm,
}: {
  groupData: ComicWithMetadataListIssuesType;
  headerLabel: string;
  skipDescription?: boolean;
  filterTerm?: string;
}) => {
  const { classes } = useStyles();
  const issues = useMemo(() => Object.values(groupData.issues), [
    groupData.issues,
  ]);
  const filteredIssues = useMemo(
    () =>
      filterTerm.length >= 3
        ? issues.filter(issue => {
            const inArc = (issue.comic.frontMatter.arc || '')
              .toLowerCase()
              .includes(filterTerm);
            const inSeries = (issue.params.series || '')
              .toLowerCase()
              .includes(filterTerm);
            const inTitle = issue.comic.frontMatter.title
              .toLowerCase()
              .includes(filterTerm);
            const inDescription = issue.comic.description
              .toLowerCase()
              .includes(filterTerm);
            const inNumber = `${
              issue.comic.frontMatter.issueNumber || ''
            }`.includes(filterTerm);
            return inDescription || inTitle || inNumber || inArc || inSeries;
          })
        : issues,
    [issues, filterTerm]
  );

  if (!groupData.issues.length) {
    return null;
  }
  return (
    <div className={classes.wrapper}>
      <MemoizedListIndex
        listData={filteredIssues}
        headerLabel={headerLabel}
        skipDescription={skipDescription}
      />
    </div>
  );
};

export default memo(ListSection);
