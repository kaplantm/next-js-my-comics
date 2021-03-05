import React from "react";
import { Typography, Box } from "@material-ui/core";
import useDate from "../../../lib/hooks/use-date";
import { paleRed } from "../../../theme/colors";

const DateDisplay = ({ dayCount }: { dayCount: number }) => {
  const { date, timesRun } = useDate(dayCount);
  return (
    <Box border={`3px dashed ${paleRed}`} p={1} borderRadius={10} mt={1} mb={3}>
      <Typography variant="h2">Date: {date}</Typography>;
      <Typography variant="h2">Times Hook Has Run: {timesRun}</Typography>
    </Box>
  );
};
export default DateDisplay;
export const MemoizedDateDisplay = React.memo(DateDisplay);
