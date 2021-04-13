import { ComicWithMetadata } from "@lib/types";
import { stringToHex } from "@lib/utils/string-utils";
import { Box } from "@material-ui/core";
import { iceBlue, softBlue } from "src/theme/colors";
import { darken } from "@material-ui/core/styles/colorManipulator";

export const getInitialState = (listData: ComicWithMetadata[]) =>
  listData.map((item) => false);

export const getArcSpot = (colorString?: string) => {
  const color = stringToHex(colorString);
  return (
    <Box
      borderRadius="1rem"
      width="1rem"
      height="1rem"
      bgcolor={color || iceBlue}
      border={`1px solid ${color ? darken(color, 0.25) : softBlue}`}
      mr={1}
      ml={1}
    />
  );
};
