import React, { useState } from "react";
import { Box, Typography, Button } from "@material-ui/core";
import { medLightBlue, medGreen } from "../../../theme/colors";
import DateDisplay from "../shared/date-display";

function WhenHooksRunBad() {
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
      <DateDisplay dayCount={dayCount} />
      <Button className="margin1" onClick={incrementCount} variant="outlined">
        Add A Day
      </Button>
      <Button className="margin1" onClick={toggleColor} variant="outlined">
        Toggle Color
      </Button>
    </Box>
  );
}

export default WhenHooksRunBad;
