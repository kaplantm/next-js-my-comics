import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  masonryContainer: {
    display: "flex",
  },
  imageMatte: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: 200,
    "& img": {
      maxHeight: 500,
      maxWidth: "100%",
    },
  },
}));

export default useStyles;
