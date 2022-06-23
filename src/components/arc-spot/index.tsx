import { stringToHSLAColor } from '@lib/utils/string-utils';
import { iceBlue, transparentBlackpt25 } from 'src/theme/colors';
import { memo } from 'react';
import { makeStyles } from 'tss-react/mui';
import { cx } from '@emotion/css';

const useStyles = makeStyles()(theme => ({
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
    display: 'flex',
    alignItems: 'stretch',
    zIndex: 1,
    borderRadius: '.25rem',
    border: `1px solid ${transparentBlackpt25}`,
    width: '1rem',
    userSelect: 'none',
    height: '2rem',

    '@media (pointer: coarse)': {
      width: '2rem',
      '&:active, &:hover': {
        '& .full': {
          left: '3rem',
          visibility: 'visible',
        },
      },
    },

    // '@media (pointer: fine)': {
    '&:hover': {
      '& .full': {
        visibility: 'visible',
      },
    },
    // },
  },
  full: {
    position: 'absolute',
    animation: '$fadeInAnimation ease .25s',
    animationIterationCount: 1,
    animationFillMode: 'forwards',
    visibility: 'hidden',
    top: -1,
    bottom: -1,
    left: '2rem',
    borderRadius: '.25rem',
    whiteSpace: 'nowrap',
    backgroundColor: 'white',
    boxShadow: `0 0 0px 5px white`,
  },
  fullInner: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '.25rem',
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
  const { classes } = useStyles();
  const color = colorString ? stringToHSLAColor(colorString, 0.25) : iceBlue;

  return (
    <div className={classes.main} style={{ backgroundColor: color }}>
      <div className={cx(classes.full, 'full')}>
        <div className={classes.fullInner} style={{ backgroundColor: color }}>
          {tooltipText}
        </div>
      </div>
    </div>
  );
};

export default memo(ArcSpotToolTip);
