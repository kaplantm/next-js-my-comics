import { Paper } from "@material-ui/core";
import clsx from "clsx";
import React, { useState, useRef, useEffect } from "react";
import ImageDialog from "./image-dialog";
import useStyles from "./use-styles";

function ViewableImage({
  width,
  src,
  ...rest
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const imageRef = useRef(null);
  const [imageData, setImageData] = useState<{
    rawWidth: number;
    rawHeight: number;
    loaded: boolean;
  }>({ rawWidth: 0, rawHeight: 0, loaded: false });

  const complete = imageRef.current?.complete;
  const rawWidth = imageRef.current?.naturalWidth;
  const rawHeight = imageRef.current?.naturalHeight;

  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }

  // Will trigger 200 responses but not 304 Not Modified
  function onLoad({ target }: any) {
    if (!imageData.loaded) {
      setImageData({
        rawWidth: target.naturalWidth,
        rawHeight: target.naturalHeight,
        loaded: true,
      });
    }
  }

  useEffect(() => {
    // Will trigger for 304 Not Modified images but not 200 responses
    if (imageRef.current?.complete && !imageData.loaded) {
      setImageData({
        rawWidth,
        rawHeight,
        loaded: true,
      });
    }
  }, [imageRef.current, rawWidth, rawHeight, imageData.loaded]);

  return (
    <>
      <Paper
        className={clsx(classes.paper, "viewableImagePaper")}
        elevation={2}
        style={{ width }}
      >
        <img
          ref={imageRef}
          src={src}
          {...rest}
          onClick={handleOpenModal}
          role="button"
          onLoad={onLoad}
          className={clsx(
            classes.image,
            !imageData.loaded && classes.loading,
            "viewableImage"
          )}
        />
      </Paper>
      <ImageDialog
        src={src}
        open={openModal}
        rawImageWidth={imageData.rawWidth}
        rawImageHeight={imageData.rawHeight}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default ViewableImage;
