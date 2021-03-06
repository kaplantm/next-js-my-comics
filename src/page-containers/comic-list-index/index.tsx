import React, { useState, memo } from 'react';
import { Typography, Grid, Collapse, IconButton } from '@material-ui/core';
import AppLink from '@components/app-link';
import { KeyboardArrowDown, KeyboardArrowLeft } from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';
import { ComicWithMetadata } from '@lib/types';
import ArcSpot from '@components/arc-spot';
import DebugLinksMemo from '@components/debug-links';
import { getInitialState } from './helpers';
import useStyles from './use-styles';

type ComicListIndexProps = {
  headerLabel: string;
  listData: ComicWithMetadata[];
  skipArcColorTooltip?: boolean;
  skipDescription?: boolean;
};

// TODO: page head
// TODO: expand all

function ComicListIndex({
  headerLabel,
  listData,
  skipArcColorTooltip,
  skipDescription,
}: ComicListIndexProps) {
  const [expandedState, setExpandedState] = useState(getInitialState(listData));
  const classes = useStyles();

  function toggleExpanded(index: number) {
    setExpandedState(prev => {
      const clone = [...prev];
      clone[index] = !prev[index];
      return clone;
    });
  }

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} className={classes.coverImageContainer}>
        {headerLabel && <Typography variant="h1">{headerLabel}</Typography>}
        <ul className={classes.list}>
          {listData.map(({ link, comic }, index) => (
            <li className={classes.listItem} key={link.pathname}>
              <div className={classes.flexCenter}>
                {!skipArcColorTooltip && (
                  <Typography
                    variant="body1"
                    component="div"
                    className={classes.arcSpotWrapper}
                  >
                    <ArcSpot
                      tooltipText={
                        skipArcColorTooltip
                          ? null
                          : comic.frontMatter.arc || 'No Arc / Unknown'
                      }
                      colorString={comic.frontMatter.arc}
                    />
                  </Typography>
                )}
                <Typography variant="body1" component="div">
                  <div className={classes.flexCenter}>
                    <AppLink nextProps={{ href: link.pathname }}>
                      {link.name}
                    </AppLink>

                    {!skipDescription && (
                      <IconButton
                        className={classes.expandButton}
                        onClick={() => toggleExpanded(index)}
                      >
                        {expandedState[index] ? (
                          <KeyboardArrowDown />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                      </IconButton>
                    )}
                    <DebugLinksMemo baseLink={link.pathname} />
                  </div>
                </Typography>
              </div>
              {!skipDescription && (
                <Collapse in={expandedState[index]}>
                  {comic?.description && (
                    <div className={classes.markdownWrapper}>
                      {expandedState[index] && (
                        <ReactMarkdown>{comic.description}</ReactMarkdown>
                      )}
                    </div>
                  )}
                </Collapse>
              )}
            </li>
          ))}
        </ul>
      </Grid>
    </Grid>
  );
}

export default ComicListIndex;

export const MemoizedListIndex = memo(ComicListIndex);
