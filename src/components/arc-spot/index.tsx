import { stringToHSLAColor } from '@lib/utils/string-utils';
import { iceBlue, transparentBlackpt25 } from 'src/theme/colors';
import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  '@keyframes fadeInAnimation': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  main: {
    position: 'relative',
    zIndex: 1,
    borderRadius: '.25rem',
    border: `1px solid ${transparentBlackpt25}`,
    width: '1rem',
    height: '2rem',

    '&:hover': {
      '& .full': {
        display: 'block',
      },
    },
  },
  full: {
    animation: '$fadeInAnimation ease .25s',
    'animation-iteration-count': 1,
    'animation-fill-mode': 'forwards',
    // display: 'none',
    top: -1,
    left: 0,
    position: 'absolute',
    borderRadius: '1rem',
    whiteSpace: 'nowrap',
    backgroundColor: 'white',
    boxShadow: '0 0 4px 6px white',
  },
  fullInner: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '.25rem',
    height: '2rem',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    border: `1px solid ${transparentBlackpt25}`,
  },
}));

const ArcSpotToolTip = ({
  tooltipText,
  colorString,
}: {
  tooltipText: string;
  colorString?: string;
}) => {
  const classes = useStyles();
  const color = colorString ? stringToHSLAColor(colorString, 0.25) : iceBlue;

  return (
    <div className={classes.main} style={{ backgroundColor: color }}>
      <div className={clsx(classes.full, 'full')}>
        <div className={classes.fullInner} style={{ backgroundColor: color }}>
          {tooltipText}
        </div>
      </div>
    </div>
  );
};

export default memo(ArcSpotToolTip);
