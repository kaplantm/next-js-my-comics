import { Dialog, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import useStyles from "./use-styles";

// TODO: types
function ImageDialog(props) {
  const { onClose, src, open, rawImageHeight, rawImageWidth } = props;
  const classes = useStyles({ rawImageHeight, rawImageWidth });
  const [fullsize, setFullsize] = useState(false);
  const [canZoom, setCanZoom] = useState(false);

  useEffect(() => {
    if (!open) {
      setFullsize(false);
    }
  }, [open]);

  useEffect(() => {
    if (rawImageHeight && rawImageWidth) {
      if (
        window.innerHeight < rawImageHeight - 50 ||
        window.innerWidth < rawImageWidth - 50
      ) {
        setCanZoom(true);
      }
    }
  }, [rawImageHeight, rawImageWidth]);

  function toggleFullsize() {
    setFullsize((prev) => !prev);
  }
  return (
    <Dialog
      onClose={onClose}
      open={open}
      classes={{ container: classes.dialogContainer }}
    >
      <img
        src={src}
        className={clsx(
          classes.dialogImage,
          canZoom && classes.zoomable,
          fullsize && classes.fullsize
        )}
        onClick={canZoom ? toggleFullsize : null}
      />
    </Dialog>
  );
}

export default ImageDialog;
