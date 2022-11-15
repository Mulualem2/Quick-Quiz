import React from "react";
import { Grid, Avatar, TextField, Button, Paper, Typography, Link } from "@mui/material";
import {FormControlLabel} from "@mui/material";
import {Checkbox} from "@mui/material";

function Login() {
  return (
    <Grid>
      <Paper elevation={10} sx={{ padding :10, height:'50vh',width:280, margin:"20px auto"}}>
        <Grid align='center'>
              <Avatar style={{backgroundColor:'#1bbd7e'}}></Avatar>
              <h2>Sign In</h2>
        </Grid>
        <form action="">
          <TextField
            id = "outlined-basic"
            label = "Username"
            variant = "outlined"
            required
            fullWidth
          /> <br></br>
          <TextField
            id = "outlined-basic"
            label = "Password"
            variant = "outlined"
            type = "password"
            required
            fullWidth
            style= {{margin:'8px 0'}}
          />
          <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
          <Button variant="contained" color="primary" fullWidth style= {{margin:'8px 0'}}>Login</Button>
          <Typography>
               <Link href="#" >
                  Forgot password ?
               </Link>
          </Typography>
          <Typography > Do you have an account ?
                <Link href="#" >
                  Sign Up 
                </Link>
                </Typography>
        </form>
      </Paper>
    </Grid>
  );
}

export default Login;
