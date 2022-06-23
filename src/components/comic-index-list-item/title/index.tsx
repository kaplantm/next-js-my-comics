import React, { memo } from 'react';
import { Typography, IconButton } from '@mui/material';
import { getSeriesRoute } from '@lib/constants/routes';
import AppLink from '@components/app-link';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import ArcSpot from '@components/arc-spot';
import dynamic from 'next/dynamic';
import useStyles from './use-styles';

const DebugLinksMemo = dynamic(() => import('@components/debug-links'));

const ListItemTitle = ({
  series,
  arc,
  skipArcColorTooltip,
  linkPath,
  linkName,
  skipDescription,
  toggleExpanded,
  expanded,
}: {
  series: string;
  arc: string;
  skipArcColorTooltip: boolean;
  linkPath: string;
  linkName: string;
  skipDescription: boolean;
  toggleExpanded: () => void;
  expanded: boolean;
}) => {
  const { classes } = useStyles();
  const isIssue = linkPath.includes('issues');

  return (
    <div className={classes.flexCenter} style={{ alignItems: 'stretch' }}>
      {!skipArcColorTooltip && arc && (
        <Typography
          variant="body1"
          component="div"
          className={classes.arcSpotWrapper}
        >
          <ArcSpot
            tooltipText={skipArcColorTooltip ? null : arc}
            colorString={arc}
          />
        </Typography>
      )}
      <Typography
        variant="body1"
        component="div"
        className={classes.comicLabel}
      >
        <div className={classes.flexCenter}>
          <div className={classes.flexColumn}>
            {isIssue && (
              <AppLink
                nextProps={{ href: getSeriesRoute(series) }}
                className={classes.smallLink}
              >
                {series}
              </AppLink>
            )}
            <AppLink nextProps={{ href: linkPath }} className={classes.link}>
              {/* {isIssue && `${series} - `} */}
              {linkName}
            </AppLink>
          </div>

          {!skipDescription && (
            <IconButton
              className={classes.expandButton}
              onClick={toggleExpanded}
              size="large"
              aria-label="expand"
              aria-expanded={expanded}
            >
              {expanded ? <KeyboardArrowDown /> : <KeyboardArrowLeft />}
            </IconButton>
          )}
          <DebugLinksMemo baseLink={linkPath} />
        </div>
      </Typography>
    </div>
  );
};

export default memo(ListItemTitle);
