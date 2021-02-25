import React from "react";
import { Typography } from "@material-ui/core";
import useDate from "../../../lib/hooks/use-date";

const DateDisplay = ({ dayCount }: { dayCount: number }) => {
  const { date, timesRun } = useDate(dayCount);
  return (
    <>
      <Typography variant="h2">Date: {date}</Typography>;
      <Typography variant="h2">Times Hook Has Run: {timesRun}</Typography>
    </>
  );
};
export default DateDisplay;
export const MemoizedDateDisplay = React.memo(DateDisplay);
