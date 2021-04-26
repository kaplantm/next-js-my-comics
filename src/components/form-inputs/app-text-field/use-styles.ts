import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(1.5),
  },
  helperText: {
    // Absolutely position to prevent container resizing
    position: "absolute",
    bottom: theme.spacing(-2.5),
  },
}));

export default useStyles;
