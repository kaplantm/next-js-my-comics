import { makeStyles } from "@material-ui/core/styles";
import { toxicGreen } from "../../theme/colors";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "red",
  },
  title: {
    fontWeight: 600,
    letterSpacing: ".1rem",
    marginLeft: theme.spacing(1),
    color: toxicGreen,
  },
}));

export default useStyles;
