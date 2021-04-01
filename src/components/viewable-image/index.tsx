import clsx from "clsx";
import React, { useState, useRef } from "react";
import ImageDialog from "./image-dialog";
import useStyles from "./use-styles";

function ViewableImage(
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const imageRef = useRef(null);
  const rawImageHeight = imageRef.current?.naturalHeight;
  const rawImageWidth = imageRef.current?.naturalWidth;
  console.log("imageRef.current", imageRef.current?.naturalWidth);
  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <img
        ref={imageRef}
        {...props}
        onClick={handleOpenModal}
        role="button"
        className={clsx(props.className, classes.image)}
      />
      <ImageDialog
        src={props.src}
        open={openModal}
        rawImageHeight={rawImageHeight}
        rawImageWidth={rawImageWidth}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default ViewableImage;
