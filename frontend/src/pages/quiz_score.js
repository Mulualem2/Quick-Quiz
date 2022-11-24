import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

function QuizScore() {
  const navigate = useNavigate()
  const { state } = useLocation();

  useEffect(() => {
    if (!state)
      navigate('/quiz')
  }, [])


  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginTop: 5,
          padding: "25px",
        }}
      >
        <h1 style={{ textAlign: 'center', fontSize: '250px', marginTop: 0, marginBottom: 5 }}>
          {state.score} / {state.total}
        </h1>
        <h1 style={{ textAlign: 'center', fontSize: '80px', marginTop: 10 }}>Congratulations!!</h1>
      </Box>
    </div>
  );
}

export default QuizScore;
