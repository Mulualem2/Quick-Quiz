import React from "react";
import { Box } from "@mui/material";
import { useLocation } from "react-router-dom";

function QuizScore() {
  const { state } = useLocation();

  return (
    <Box>
      <h1>
        {state.score} / {state.total}
      </h1>
      <h1>Congratulations!!</h1>
    </Box>
  );
}

export default QuizScore;
