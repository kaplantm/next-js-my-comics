import { fade, makeStyles } from "@material-ui/core/styles";
import { iceBlue, powderBlue } from "../../theme/colors";

const useStyles = makeStyles((theme) => ({
  summaryImageContainer: {
    // paddingLeft: "0 !important",
    // paddingRight: "0 !important",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
    "& ul": {
      paddingInlineStart: theme.spacing(2),
    },
    "& li": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
}));

export default useStyles;
