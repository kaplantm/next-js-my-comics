import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
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
