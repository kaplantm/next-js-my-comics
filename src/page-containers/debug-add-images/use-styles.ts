import { makeStyles } from "@material-ui/core/styles";

type styleConfigType = {
  coverWidth: number;
  coverHeight: number;
};

const useStyles = makeStyles((theme) => ({
  uploadForm: {
    width: "100%",
  },
}));

export default useStyles;
