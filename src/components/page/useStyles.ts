import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "red",
  },
  title: {
    fontWeight: 600,
    letterSpacing: ".1rem",
    marginLeft: theme.spacing(1),
  },
}));

export default useStyles;
