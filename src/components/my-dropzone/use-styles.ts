import { makeStyles } from "@material-ui/core/styles";
import { iceBlue, softBlueLight } from "src/theme/colors";

const useStyles = makeStyles((theme) => ({
  dropzone: {
    padding: theme.spacing(6, 6),
    background: `repeating-linear-gradient(-55deg,${iceBlue},${iceBlue} 10px,${softBlueLight} 10px,${softBlueLight} 20px)`,
    borderRadius: 6,
    cursor: "pointer",
  },
}));

export default useStyles;
