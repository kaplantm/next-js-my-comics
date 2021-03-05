import { makeStyles } from "@material-ui/core/styles";
import { powderBlue } from "../../theme/colors";
import { categoriesEnum } from "./list-items";

const useStyles = makeStyles((theme) => ({
  listItem: {
    border: `1px solid ${powderBlue}`,
    borderRadius: 10,
    margin: theme.spacing(2, 0),
  },
}));

export default useStyles;
