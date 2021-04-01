import { makeStyles } from "@material-ui/core/styles";
import { transparentBlack } from "src/theme/colors";

const useStyles = makeStyles((theme) => ({
  dialogContainer: {
    backgroundColor: transparentBlack,
  },
  dialogImage: {
    maxHeight: "90vh",
    maxWidth: "100%",
  },
  zoomable: {
    cursor: "zoom-in",
  },
  fullsize: {
    maxHeight: "none",
    maxWidth: "none",
    cursor: "zoom-out",
  },
}));

export default useStyles;
