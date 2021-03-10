import { fade, makeStyles } from "@material-ui/core/styles";
import { iceBlue, powderBlue } from "../../theme/colors";

const useStyles = makeStyles((theme) => ({
  listItem: {
    border: `1px solid ${powderBlue}`,
    borderRadius: 10,
    margin: theme.spacing(2, 0),
  },
  allCategories: {
    border: `2px solid ${iceBlue}`,
    backgroundColor: fade(iceBlue, 0.4),
    padding: theme.spacing(2),
    display: "flex",
    flexWrap: "wrap",
    "& .chipMain": {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  },
}));

export default useStyles;
