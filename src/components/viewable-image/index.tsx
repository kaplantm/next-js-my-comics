/* eslint-disable jsx-a11y/click-events-have-key-events */
// todo: accesibility
import { getWidthHeightFromImagePath } from '@lib/utils/image-utils';
import { Paper } from '@mui/material';
import { cx } from '@emotion/css';
import React, { useState, useRef, useEffect } from 'react';
import ImageDialog from './image-dialog';
import useStyles from './use-styles';

function ViewableImage({
  src,
  open,
  setOpenIndex,
  changeOpenIndex,
  index,
  ...rest
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  open?: boolean;
  setOpenIndex?: (index: number) => void;
  index?: number;
  changeOpenIndex?: (delta: number) => void;
}) {
  const { classes } = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const isOpen = setOpenIndex ? open : openModal; // can use internal or external state
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef(null);
  const { width: rawWidth, height: rawHeight } = getWidthHeightFromImagePath(
    src
  );
  function handleOpenModal() {
    if (setOpenIndex) {
      setOpenIndex(index);
    } else {
      setOpenModal(true);
    }
  }
  function handleCloseModal() {
    if (setOpenIndex) {
      setOpenIndex(null);
    } else {
      setOpenModal(false);
    }
  }

  // Will trigger 200 responses but not 304 Not Modified
  function onLoad({ target }: any) {
    if (!loaded) {
      setLoaded(true);
    }
  }

  useEffect(() => {
    // Will trigger for 304 Not Modified images but not 200 responses
    if (imageRef.current?.complete && !loaded) {
      setLoaded(true);
    }
  }, [imageRef.current, rawWidth, rawHeight, loaded]);

  return (
    <div
      aria-hidden
      className={cx(
        classes.viewableImageWrapper,
        !loaded && classes.loading,
        'viewableImageWrapper'
      )}
    >
      <Paper className={cx(classes.paper, 'viewableImagePaper')} elevation={2}>
        <img
          alt="Comic book panel"
          ref={imageRef}
          // Use this for testing image loading styles
          // src=" https://deelay.me/5000/https://picsum.photos/200/500"
          src={src}
          {...rest}
          onClick={handleOpenModal}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="button"
          onLoad={onLoad}
          className={cx(classes.image, 'viewableImage')}
        />
      </Paper>

      <ImageDialog
        src={src}
        open={isOpen}
        rawImageWidth={rawWidth}
        rawImageHeight={rawHeight}
        onClose={handleCloseModal}
        changeOpenIndex={changeOpenIndex}
      />
    </div>
  );
}

export default ViewableImage;
