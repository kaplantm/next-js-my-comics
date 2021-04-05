import { makeStyles } from "@material-ui/core/styles";
import { iceBlue } from "src/theme/colors";

const useStyles = makeStyles((theme) => ({
  masonryContainer: {
    display: "flex",
    flex: 1,
  },
  imageMatte: {
    backgroundColor: iceBlue,
    borderRadius: 6,
    padding: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "200px",
    "& img": {
      maxWidth: "100%",
      maxHeight: "500px",
    },
  },
}));

export default useStyles;
