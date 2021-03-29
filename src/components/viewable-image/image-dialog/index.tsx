import { Dialog } from "@material-ui/core";

// TODO: types
function ImageDialog(props) {
  const { onClose, src, open } = props;

  return (
    <Dialog onClose={onClose} open={open}>
      <img src={src} />
    </Dialog>
  );
}

export default ImageDialog;
