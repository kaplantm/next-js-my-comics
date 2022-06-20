import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  list: {
    [theme.breakpoints.down('md')]: {
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
