import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  arcSpotWrapper: {
    marginTop: 4,
    flexShrink: 1,
    textAlign: 'center',
  },
  comicLabel: {
    flexGrow: 1,
  },
  listItem: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
  },
  expandButton: {
    margin: theme.spacing(-2, 1),
  },
  markdownWrapper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
