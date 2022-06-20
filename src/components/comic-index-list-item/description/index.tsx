import React, { memo, useMemo } from 'react';
import { Collapse } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import { useQuery } from 'react-query';
import { safeLoadFront } from 'yaml-front-matter';
import useStyles from './use-styles';

const MemoReactMarkdown = memo(ReactMarkdown);

const CollapsibleDescription = ({
  expanded,
  description,
  linkPath,
}: {
  expanded: boolean;
  description?: string;
  linkPath: string;
}) => {
  const { classes } = useStyles();
  const queryPath = `/static${linkPath}/data.md`;
  const { data, error } = useQuery(queryPath, {
    enabled: expanded && !description,
  });
  const loadedDescription = useMemo(() => {
    if (description) {
      return description;
    }
    if (data) {
      const { __content: loaded } = safeLoadFront(data as string, {
        json: true,
      });
      return loaded;
    }
    return '';
  }, [data, description]);

  return (
    <Collapse
      in={expanded && !!loadedDescription && !error}
      mountOnEnter
      unmountOnExit
    >
      <div className={classes.markdownWrapper}>
        {!data ? (
          'Loading...'
        ) : (
          <MemoReactMarkdown>
            {loadedDescription || 'No Description Found'}
          </MemoReactMarkdown>
        )}
      </div>
    </Collapse>
  );
};

export default memo(CollapsibleDescription);
