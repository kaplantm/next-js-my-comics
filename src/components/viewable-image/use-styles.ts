import { makeStyles } from "@material-ui/core/styles";
import { iceBlue } from "../../theme/colors";

const useStyles = makeStyles((theme) => ({
  paper: {
    overflow: "hidden",
    width: "100%",
  },
  image: {
    cursor: "pointer",
    display: "block",
    backgroundColor: iceBlue,
    width: "100%",
  },
  loading: {
    minHeight: 200,
  },
}));

export default useStyles;
