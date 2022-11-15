import React from "react";
import { Box, TextField, Button } from "@mui/material";

function Login() {
  return (
    <div>
      <Box sx={{ marginTop: "100px" }}>
        <form action="">
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            required
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required
          />
          <Button variant="contained" color="success">Login</Button>
        </form>
      </Box>
    </div>
  );
}

export default Login;
