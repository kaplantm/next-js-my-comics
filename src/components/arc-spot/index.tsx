import { stringToHSLAColor } from '@lib/utils/string-utils';
import { Box } from '@material-ui/core';
import { iceBlue, transparentBlackpt25 } from 'src/theme/colors';
import { memo } from 'react';

const ArcSpotToolTip = ({
  tooltipText,
  colorString,
}: {
  tooltipText: string;
  colorString?: string;
}) => {
  const color = colorString ? stringToHSLAColor(colorString, 0.25) : iceBlue;

  const spot = (
    <Box
      borderRadius="1rem"
      bgcolor={color}
      border={`1px solid ${transparentBlackpt25}`}
      pl={2}
      pr={2}
    >
      {tooltipText}
    </Box>
  );
  return spot;
};

export default memo(ArcSpotToolTip);
