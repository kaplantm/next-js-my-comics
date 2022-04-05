import { makeStyles } from 'tss-react/mui';
import { transparentBlack } from 'src/theme/colors';

type styleConfigType = {
  rawImageWidth: number;
  rawImageHeight: number;
};

const useStyles = makeStyles<styleConfigType>()(
  (theme, { rawImageWidth, rawImageHeight }) => ({
    dialogContainer: {
      backgroundColor: transparentBlack,
    },
    dialogImage: {
      maxHeight: '90vh',
      maxWidth: '100%',
    },
    zoomable: {
      cursor: 'zoom-in',
    },
    fullsize: {
      maxHeight: 'none',
      maxWidth: 'none',
      cursor: 'zoom-out',
      width: rawImageWidth || 'unset',
      height: rawImageHeight || 'unset',
    },
  })
);

export default useStyles;
