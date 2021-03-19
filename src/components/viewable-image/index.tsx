import React, { useState } from "react";
import ImageDialog from "./image-dialog";

function ViewableImage(
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) {
  const [openModal, setOpenModal] = useState(false);

  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }

  return (
    <>
      <img {...props} onClick={handleOpenModal} />
      <ImageDialog
        src={props.src}
        open={openModal}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default ViewableImage;
