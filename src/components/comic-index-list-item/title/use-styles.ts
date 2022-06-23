import { stone } from 'src/theme/colors';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  arcSpotWrapper: {
    display: 'flex',
    flexShrink: 1,
    textAlign: 'center',
  },
  comicLabel: {
    flexGrow: 1,
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'stretch',
    gap: theme.spacing(2),
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(0.5),
  },
  expandButton: {
    margin: theme.spacing(-2, 1),
  },
  link: {
    lineHeight: 1,
  },
  smallLink: {
    color: stone,
    fontStyle: 'italic',
    fontSize: '.8em',
    lineHeight: 0.75,
  },
}));

export default useStyles;
