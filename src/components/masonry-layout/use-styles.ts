import { makeStyles } from "@material-ui/core/styles";
import { iceBlue, softBlue } from "src/theme/colors";

const useStyles = makeStyles(theme => ({
  masonryResultContainer: {
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
  showMoreButtonContainer: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  showMoreButton: {
    display: "flex",
    flex: 1,
    backgroundColor: softBlue,
    padding: theme.spacing(3),
    fontSize: "1.25rem",
    fontWeight: 800,
    color: theme.palette.text.secondary,
  },
}));

export default useStyles;
