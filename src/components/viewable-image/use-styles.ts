import { makeStyles } from "@material-ui/core/styles";
import { iceBlue } from "../../theme/colors";

const useStyles = makeStyles((theme) => ({
  paper: {
    overflow: "hidden",
  },
  image: {
    maxWidth: "100%",
    cursor: "pointer",
    display: "block",
    backgroundColor: iceBlue,
  },
  loading: {
    minHeight: 200,
  },
}));

export default useStyles;
