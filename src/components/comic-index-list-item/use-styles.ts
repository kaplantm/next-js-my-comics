import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  listItem: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
}));

export default useStyles;
