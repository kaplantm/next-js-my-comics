import React, { useState, memo } from 'react';
import { Typography, Grid, Collapse, IconButton } from '@material-ui/core';
import AppLink from '@components/app-link';
import { KeyboardArrowDown, KeyboardArrowLeft } from '@material-ui/icons';
import ReactMarkdown from 'react-markdown';
import ArcSpot from '@components/arc-spot';
import { getIssueRoute, getSeriesRoute } from '@lib/constants/routes';
import DebugLinksMemo from '@components/debug-links';
import { extendedComicIssue, extendedComicSeries } from '@lib/types';
import { getInitialState } from './helpers';
import useStyles from './use-styles';

type ComicListIndexProps = {
  headerLabel: string;
  listData: extendedComicIssue[] | extendedComicSeries[];
  skipArcColorTooltip?: boolean;
  skipDescription?: boolean;
  isIssueList?: boolean;
};

// TODO: page head
// TODO: expand all

function ComicListIndex({
  headerLabel,
  listData,
  skipArcColorTooltip,
  skipDescription,
  isIssueList,
}: ComicListIndexProps) {
  console.log({ listData });
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
          {listData.map(
            (comic: extendedComicIssue | extendedComicSeries, index) => (
              <li className={classes.listItem} key={comic.id}>
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
                            : (comic as extendedComicIssue)?.arc?.title ||
                              'No Arc / Unknown'
                        }
                        colorString={(comic as extendedComicIssue)?.arc?.title}
                      />
                    </Typography>
                  )}
                  <Typography variant="body1" component="div">
                    <div className={classes.flexCenter}>
                      {/* TODO: now check if this is causing full relaod */}
                      <AppLink
                        nextProps={{
                          href: isIssueList
                            ? getIssueRoute(
                                (comic as extendedComicIssue).seriesId,
                                (comic as extendedComicIssue).number
                              )
                            : getSeriesRoute(comic.id),
                        }}
                      >
                        {(comic as extendedComicIssue).number
                          ? `#${(comic as extendedComicIssue).number} - `
                          : ''}
                        {comic.title}
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
                      <DebugLinksMemo
                        baseLink={
                          isIssueList
                            ? getIssueRoute(
                                (comic as extendedComicIssue).number,
                                (comic as extendedComicIssue).seriesId
                              )
                            : getSeriesRoute(comic.id)
                        }
                      />
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
            )
          )}
        </ul>
      </Grid>
    </Grid>
  );
}

export default ComicListIndex;

export const MemoizedListIndex = memo(ComicListIndex);
