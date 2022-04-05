import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  coverImageContainer: {
    "& ul": {
      paddingInlineStart: theme.spacing(2),
    },
    "& li": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  categoryLink: {
    textTransform: "capitalize",
  },
}));

export default useStyles;
