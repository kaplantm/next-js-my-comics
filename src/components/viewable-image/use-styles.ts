import { fade, makeStyles } from "@material-ui/core/styles";
import { iceBlue, powderBlue } from "../../theme/colors";

const useStyles = makeStyles((theme) => ({
  image: {
    cursor: "pointer",
    display: "block",
    backgroundColor: iceBlue,
    width: "100%",
    borderRadius: 6,
  },
  loading: {
    minHeight: 200,
  },
}));

export default useStyles;
