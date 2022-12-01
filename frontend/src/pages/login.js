import React from "react";
import { Grid, Avatar, TextField, Button, Paper, Typography, Link } from "@mui/material";
import {FormControlLabel} from "@mui/material";
import {Checkbox} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import api from '../api/api'
import { useNavigate } from "react-router-dom";
//import Change from './Change'

const Login = ({ handleChange }) => {
  const initialValues = {
    email: '',
    password: '',
    remember: false
}
const validationSchema = Yup.object().shape({
    email: Yup.string().email('please enter valid email or username').required("Required"),
    //uname: Yup.string().required("Required"),
    password: Yup.string().required("Required")
})
const navigate= useNavigate();
const onSubmit = values => {
    console.log(values)
    api.post("/login", values).then(
      (response) => {
          var result = response.data;
          console.log(result);
          navigate('/login/homepage')
      },
      (error) => {
          console.log(error);
      }
  );
}
  return (
    <Grid>
      <Paper elevation={10} sx={{ padding :10, height:'50vh',width:280, margin:"20px auto"}}>
        <Grid align='center'>
              <Avatar style={{backgroundColor:'#1bbd7e'}}><LockOutlinedIcon/></Avatar>
              <h2>Sign In</h2>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={(event) => onSubmit(event) } validationSchema={validationSchema}>
        {Formik =>{

              return <Form>
          <Field as={TextField} label='Username' name="email"
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage name="email">
                                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                            </ErrorMessage>}
                                /> <br></br>
          <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password">
                                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                            </ErrorMessage>}  />
          <Field as={FormControlLabel}
                                name='checkedB'
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
          <Button type='submit' color='primary' variant="contained" disabled={!Formik.isValid}
                                style={ {margin: '8px 0'} } fullWidth>Sign In</Button>
          </Form>
                    }}
          </Formik>
          <Typography>
               <Link href="./forgotPassword" >
                  Forgot password ?
               </Link>
          </Typography>
          <Typography > Don't you have an account ?
          <Link href="/signup" onClick={() => handleChange("event", 1)} >
                        Sign Up
                </Link>
                </Typography>
        
      </Paper>
    </Grid>
  );
}

export default Login;
