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
  list: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
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
  coverImageContainer: {
    '& >li': {
      listStyleType: 'none',
      paddingLeft: 0,
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
    },
  },
  coverImage: {
    width: '30%',
    float: 'right',
    margin: theme.spacing(2, 0, 2, 2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  divider: {
    width: '100%',
    margin: theme.spacing(4, 0, 2, 0),
  },
  markdownWrapper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
