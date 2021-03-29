import clsx from "clsx";
import React, { useState } from "react";
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

  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <img
        {...props}
        onClick={handleOpenModal}
        role="button"
        className={clsx(props.className, classes.image)}
      />
      <ImageDialog
        src={props.src}
        open={openModal}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default ViewableImage;
