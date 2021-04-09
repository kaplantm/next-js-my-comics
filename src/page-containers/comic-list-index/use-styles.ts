import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  coverImageContainer: {
    "& li": {
      paddingTop: theme.spacing(0),
      paddingBottom: theme.spacing(0),
    },
  },
  coverImage: {
    width: "30%",
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
