import React, { useState } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { medLightBlue, medGreen } from "../../../theme/colors";
import { MemoizedDateDisplay } from "../shared/date-display";

function WhenHooksRunGood() {
  const [dayCount, setDayCount] = useState(0);
  const [color, setColor] = useState(medLightBlue);

  function incrementCount() {
    setDayCount((prev) => ++prev); // note prev++ doesn't work here, order matters
  }
  function toggleColor() {
    setColor((prev) => (prev === medLightBlue ? medGreen : medLightBlue));
  }

  return (
    <Box border={`10px solid ${color}`} p={2}>
      <Typography variant="h2">Count: {dayCount}</Typography>
      <MemoizedDateDisplay dayCount={dayCount} />
      <Button onClick={incrementCount}>Add</Button>
      <Button onClick={toggleColor}>Toggle Color</Button>
    </Box>
  );
}

export default WhenHooksRunGood;
