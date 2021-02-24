import { makeStyles } from "@material-ui/core/styles";
import { lightPastelGreen } from "../../../theme/colors";

const useStyles = makeStyles((theme) => ({
  local: {
    fontWeight: 600,
    fontSize: "1rem",
    backgroundColor: lightPastelGreen,
  },
}));

export default useStyles;
