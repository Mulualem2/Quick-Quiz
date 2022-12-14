import React from 'react'
import { Grid, Avatar, TextField, Button, Paper, Typography, Link } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
//import { FormHelperText } from "@mui/material";
import * as yup from 'yup'
import api from '../api/api'
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const initialValues = {
    fname: '',
    lname: '',
    uname: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const validationSchema = yup.object({
  uname: yup
    .string()
    .min(3, "It is so short")
    .required("User name is required!"),
  fname: yup
    .string()
    .min(3, "Please enter you real name")
    .required("First name is required!"),
  lname: yup
    .string()
    .min(3, "Please enter you real name")
    .required("Last name is required!"),
  email: yup.string().email("Please enter a valid email address").required(),
  password: yup
    .string()
    .matches(PASSWORD_REGEX, "Please enter a strong password")
    .required(),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: yup
        .string()
        .oneOf([yup.ref("password")], "Password does not match"),
    }),
});
const navigate= useNavigate();
const onSubmit = values => {
    console.log('Form data',values)
    api.post("/signup", values).then(
      (response) => {
          var result = response.data;
          console.log(result);
          navigate('/signup/login')
      },
      (error) => {
          console.log(error);
      }
  );
}
  return (
    <Grid>
      <Paper elevation={10} sx={{ padding :20, height:'100vh',width:650, margin:"20px auto"}}>
        <Grid align='center'>
              <Avatar style={{backgroundColor:'#1bbd7e'}}></Avatar>
              <h2 style = {{margin: 0}}>Sign Up</h2>
              <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
        </Grid>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={(event) => onSubmit(event) }>
        {Formik =>{
       return <Form>
          <Field as={TextField} fullWidth name="fname" label='First Name'
                                  placeholder="Enter your name" helperText={
                                    <ErrorMessage name="fname">
                                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                                </ErrorMessage>
                              } />
          <Field as={TextField} fullWidth name="lname" label='Last Name'
                                  placeholder="Enter your name" helperText={
                                    <ErrorMessage name="lname">
                                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                                </ErrorMessage>
                              } />
          <Field as={TextField} fullWidth name="uname" label='User Name'
                                  placeholder="Enter your name" helperText={
                                    <ErrorMessage name="uname">
                                    { msg => <div style={{ color: 'red' }}>{msg}</div> }
                                </ErrorMessage>
                              } />
          <Field as={TextField} fullWidth name="email" label='Email'
                                placeholder="Enter your email" helperText={
                                  <ErrorMessage name="email">
                                  { msg => <div style={{ color: 'red' }}>{msg}</div> }
                              </ErrorMessage>
                            } />
          <Field as={TextField} fullWidth name='password' type="password"
                                label='Password' placeholder="Enter your password"
                                helperText={
                                  <ErrorMessage name="password">
                                  { msg => <div style={{ color: 'red' }}>{msg}</div> }
                              </ErrorMessage>
                            } />
                            <Field as={TextField} fullWidth name="confirmPassword" type="password"
                                label='Confirm Password' placeholder="Confirm your password"
                                helperText={
                                  <ErrorMessage name="confirmPassword">
                                  { msg => <div style={{ color: 'red' }}>{msg}</div> }
                              </ErrorMessage>
                            } />
          <Button type='submit' variant='contained' disabled={!Formik.isValid}
                                color='primary'>Sign up</Button>
          <Typography > Already have an account ?
                <Link href="/login" >
                  Sign In 
                </Link>
                </Typography>
          
         </Form>
        }}
         </Formik>
      </Paper>
    </Grid>
  )
}

export default SignUp;