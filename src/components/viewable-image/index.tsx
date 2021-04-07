import { getWidthHeightFromImagePath } from "@lib/utils/image-utils";
import { Paper } from "@material-ui/core";
import clsx from "clsx";
import React, { useState, useRef, useEffect } from "react";
import ImageDialog from "./image-dialog";
import useStyles from "./use-styles";

function ViewableImage({
  src,
  ...rest
}: React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>) {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef(null);
  const { width: rawWidth, height: rawHeight } = getWidthHeightFromImagePath(
    src
  );

  function handleOpenModal() {
    setOpenModal(true);
  }
  function handleCloseModal() {
    setOpenModal(false);
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
        open={openModal}
        rawImageWidth={rawWidth}
        rawImageHeight={rawHeight}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default ViewableImage;
