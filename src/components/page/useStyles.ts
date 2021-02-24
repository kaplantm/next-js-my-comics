import { makeStyles } from "@material-ui/core/styles";
import { toxicGreen } from "../../theme/colors";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 600,
    letterSpacing: ".1rem",
    marginLeft: theme.spacing(1),
    color: toxicGreen,
  },
  list: {
    display: "flex",
  },
  link: {
    whiteSpace: "nowrap",
  },
}));

export default useStyles;
