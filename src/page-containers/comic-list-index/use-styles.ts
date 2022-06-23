import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
    },
  },
}));

export default useStyles;
