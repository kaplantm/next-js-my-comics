import { makeStyles } from "@material-ui/core/styles";
import { paleRed } from "../../theme/colors";

const useStyles = makeStyles((theme) => ({
  inherited: {
    fontWeight: 600,
    fontSize: "1rem",
    backgroundColor: paleRed,
  },
}));

export default useStyles;
