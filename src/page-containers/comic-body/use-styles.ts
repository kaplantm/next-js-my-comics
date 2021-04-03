import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  coverImageContainer: {
    "& ul": {
      paddingInlineStart: theme.spacing(2),
    },
    "& li": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
  coverImage: {
    maxWidth: "30%",
    float: "right",
    margin: theme.spacing(2, 0, 2, 2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  divider: {
    width: "100%",
    margin: theme.spacing(4, 0, 2, 0),
  },
}));

export default useStyles;
