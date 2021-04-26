import { getWidthHeightFromImagePath } from "@lib/utils/image-utils";
import { Paper } from "@material-ui/core";
import clsx from "clsx";
import React, { useState, useRef, useEffect } from "react";
import ImageDialog from "./image-dialog";
import useStyles from "./use-styles";

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
  open: boolean;
  setOpenIndex: (index: number) => void;
  index: number;
  changeOpenIndex: (delta: number) => void;
}) {
  const classes = useStyles();
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
      className={clsx(
        classes.viewableImageWrapper,
        !loaded && classes.loading,
        "viewableImageWrapper"
      )}
    >
      <Paper
        className={clsx(classes.paper, "viewableImagePaper")}
        elevation={2}
      >
        <img
          ref={imageRef}
          // Use this for testing image loading styles
          // src="http://slowwly.robertomurray.co.uk/delay/2000/url/https://picsum.photos/200/500"
          src={src}
          {...rest}
          onClick={handleOpenModal}
          role="button"
          onLoad={onLoad}
          className={clsx(classes.image, "viewableImage")}
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
