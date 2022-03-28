import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  list: {
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
    },
  },

  coverImageContainer: {
    '& >li': {
      listStyleType: 'none',
      paddingLeft: 0,
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
    },
  },
}));

export default useStyles;
