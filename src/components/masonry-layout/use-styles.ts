import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  masonryContainer: {
    display: "flex",
  },
  imageMatte: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& img": {
      maxWidth: "100%",
      maxHeight: "500px",
    },
  },
}));

export default useStyles;
