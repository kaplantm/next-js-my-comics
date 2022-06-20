import React, { memo } from 'react';
import { Typography, IconButton } from '@mui/material';
import AppLink from '@components/app-link';
import { KeyboardArrowDown, KeyboardArrowLeft } from '@mui/icons-material';
import ArcSpot from '@components/arc-spot';
import DebugLinksMemo from '@components/debug-links';
import useStyles from './use-styles';

const ListItemTitle = ({
  arc,
  skipArcColorTooltip,
  linkPath,
  linkName,
  skipDescription,
  toggleExpanded,
  expanded,
}: {
  arc: string;
  skipArcColorTooltip: boolean;
  linkPath: string;
  linkName: string;
  skipDescription: boolean;
  toggleExpanded: () => void;
  expanded: boolean;
}) => {
  const { classes } = useStyles();

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
          <AppLink nextProps={{ href: linkPath }}>{linkName}</AppLink>

          {!skipDescription && (
            <IconButton
              className={classes.expandButton}
              onClick={toggleExpanded}
              size="large"
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
