import React, { useState, memo, useMemo } from 'react';
import { Typography, IconButton, Collapse } from '@mui/material';
import AppLink from '@components/app-link';
import { KeyboardArrowDown, KeyboardArrowLeft } from '@mui/icons-material';
import ReactMarkdown from 'react-markdown';
import { safeLoadFront } from 'yaml-front-matter';
import { ComicType, MappedRouteType } from '@lib/types';
import ArcSpot from '@components/arc-spot';
import DebugLinksMemo from '@components/debug-links';
import { useQuery } from 'react-query';
import useStyles from './use-styles';

const MemoReactMarkdown = memo(ReactMarkdown);

const ComicIndexListItem = ({
  link,
  comic,
  skipArcColorTooltip,
  skipDescription,
}: {
  link: MappedRouteType;
  comic: ComicType;
  skipArcColorTooltip: boolean;
  skipDescription: boolean;
}) => {
  const [expanded, setExpanded] = useState(false);
  const { classes } = useStyles();
  const queryPath = `/static${link.pathname}/data.md`;
  const { data, error } = useQuery(queryPath, {
    enabled: expanded && !comic.description && !skipDescription,
  });

  const loadedDescription = useMemo(() => {
    if (comic.description) {
      return comic.description;
    }
    if (data) {
      const { __content: description } = safeLoadFront(data as string, {
        json: true,
      });
      return description;
    }
    return '';
  }, [data, comic.description]);

  function toggleExpanded() {
    setExpanded(prev => !prev);
  }

  return (
    <li className={classes.listItem} key={link.pathname}>
      <div className={classes.flexCenter} style={{ alignItems: 'stretch' }}>
        {!skipArcColorTooltip && comic.frontMatter.arc && (
          <Typography
            variant="body1"
            component="div"
            className={classes.arcSpotWrapper}
          >
            <ArcSpot
              tooltipText={skipArcColorTooltip ? null : comic.frontMatter.arc}
              colorString={comic.frontMatter.arc}
            />
          </Typography>
        )}
        <Typography
          variant="body1"
          component="div"
          className={classes.comicLabel}
        >
          <div className={classes.flexCenter}>
            <AppLink nextProps={{ href: link.pathname }}>{link.name}</AppLink>

            {!skipDescription && !error && (
              <IconButton
                className={classes.expandButton}
                onClick={toggleExpanded}
                size="large"
              >
                {expanded ? <KeyboardArrowDown /> : <KeyboardArrowLeft />}
              </IconButton>
            )}
            <DebugLinksMemo baseLink={link.pathname} />
          </div>
        </Typography>
      </div>{' '}
      {!skipDescription && (
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
      )}
    </li>
  );
};

export default memo(ComicIndexListItem);
