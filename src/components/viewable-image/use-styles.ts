import { makeStyles } from "@material-ui/core/styles";
import { iceBlue } from "../../theme/colors";

const useStyles = makeStyles((theme) => ({
  viewableImageWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "min-height .3s",
    minHeight: 0,
  },
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
    minHeight: 150,
  },
}));

export default useStyles;
