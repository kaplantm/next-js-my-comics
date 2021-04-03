import { makeStyles } from "@material-ui/core/styles";
import { iceBlue } from "../../theme/colors";

const useStyles = makeStyles((theme) => ({
  image: {
    cursor: "pointer",
    display: "block",
    backgroundColor: iceBlue,
    borderRadius: 10,
  },
  loading: {
    minHeight: 200,
  },
}));

export default useStyles;
