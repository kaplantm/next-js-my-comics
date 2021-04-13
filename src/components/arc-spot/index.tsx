import { stringToHex } from "@lib/utils/string-utils";
import { Box, Tooltip } from "@material-ui/core";
import { iceBlue, softBlue } from "src/theme/colors";
import { darken } from "@material-ui/core/styles/colorManipulator";
import { memo } from "react";

const ArcSpotToolTip = ({
  tooltipText,
  colorString,
}: {
  tooltipText: string;
  colorString?: string;
}) => {
  const color = colorString ? stringToHex(colorString) : iceBlue;

  const spot = (
    <Box
      borderRadius="1rem"
      width="1rem"
      height="1rem"
      bgcolor={color}
      border={`1px solid ${color ? darken(color, 0.25) : softBlue}`}
      mr={1}
      ml={1}
    />
  );
  if (tooltipText) {
    return <Tooltip title={tooltipText}>{spot}</Tooltip>;
  }
  return spot;
};

export default memo(ArcSpotToolTip);
