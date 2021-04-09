import { ComicWithMetadata, MappedRouteType } from "@lib/types";
import { stringToHex } from "@lib/utils/string-utils";
import { Box } from "@material-ui/core";
import { iceBlue } from "src/theme/colors";

export const getInitialState = (listData: ComicWithMetadata[]) =>
  listData.map((item) => false);

export const getArcSpot = (colorString?:string) => (
  <Box
    borderRadius="1rem"
    width="1rem"
    height="1rem"
    bgcolor={stringToHex(colorString) || iceBlue}
    mr={1}
    ml={1}
  />
);
