import { stringToHSLAColor } from '@lib/utils/string-utils';
import { iceBlue, transparentBlackpt25 } from 'src/theme/colors';
import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    borderRadius: '1rem',
    border: `1px solid ${transparentBlackpt25}`,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      whiteSpace: 'nowrap',
    },
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
      {tooltipText}
    </div>
  );
};

export default memo(ArcSpotToolTip);
