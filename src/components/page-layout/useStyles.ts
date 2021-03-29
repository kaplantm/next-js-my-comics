import { makeStyles } from "@material-ui/core/styles";
import { black, yellow } from "../../theme/colors";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 600,
    letterSpacing: ".1rem",
    marginLeft: theme.spacing(1),
    color: yellow,
  },
  list: {
    display: "flex",
  },
  link: {
    whiteSpace: "nowrap",
    color: yellow,
  },
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: black,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(14, 0, 6, 0),
  },
  navList: {
    display: "flex",
  },
}));

export default useStyles;
