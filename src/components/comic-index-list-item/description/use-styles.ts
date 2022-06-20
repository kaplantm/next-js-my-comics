import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(theme => ({
  markdownWrapper: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default useStyles;
