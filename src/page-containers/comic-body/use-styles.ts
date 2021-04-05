import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  coverImageContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    "& ul": {
      paddingInlineStart: theme.spacing(2),
    },
    "& li": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    "& .viewableImageWrapper": {
      maxWidth: "30%",
      float: "right",
      margin: theme.spacing(2, 0, 2, 2),
      [theme.breakpoints.down("xs")]: {
        maxWidth: "100%",
        "& img": {
          maxHeight: "50vh",
        },
      },
    },
  },
  childrenContainer: {
    marginTop: theme.spacing(6),
    maxWidth: "60%",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  imagesContainer: {
    marginTop: theme.spacing(6),
  },
}));

export default useStyles;
