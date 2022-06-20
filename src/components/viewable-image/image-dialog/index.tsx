/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
// todo: accessibility
import { Dialog } from '@mui/material';
import { cx } from '@emotion/css';
import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import useStyles from './use-styles';

// TODO: types
function ImageDialog(props) {
  const {
    onClose,
    src,
    open,
    rawImageHeight,
    rawImageWidth,
    changeOpenIndex,
  } = props;
  const { classes } = useStyles({ rawImageHeight, rawImageWidth });
  const [fullsize, setFullsize] = useState(false);
  const [canZoom, setCanZoom] = useState(false);
  const swipeHandler = useSwipeable({
    onSwipedLeft: () => {
      changeOpenIndex(1);
    },
    onSwipedRight: () => {
      changeOpenIndex(-1);
    },
  });
  const handlers = changeOpenIndex ? swipeHandler : {};

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
    setFullsize(prev => !prev);
  }
  return (
    <Dialog
      onClose={onClose}
      open={open}
      classes={{ container: classes.dialogContainer }}
      maxWidth={false}
      {...handlers}
    >
      <img
        alt="Comic book panel"
        src={src}
        className={cx(
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
