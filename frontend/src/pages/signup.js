import React from 'react'
import { Grid, Avatar, TextField, Button, Paper, Typography, Link } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
//import { FormHelperText } from "@mui/material";
import * as Yup from 'yup'
const SignUp = () => {
  const initialValues = {
    fname: '',
    lname: '',
    uname: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const validationSchema = Yup.object().shape({
    fname: Yup.string().min(3, "It's too short").required("Required"),
    lname: Yup.string().min(3, "It's too short").required("Required"),
    uname: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required")
})
const onSubmit = (values, props) => {
    console.log(values)
    console.log(props)
    setTimeout(() => {

        props.resetForm()
        props.setSubmitting(false)
    }, 2000)
}
  return (
    <Grid>
      <Paper elevation={10} sx={{ padding :20, height:'60vh',width:280, margin:"20px auto"}}>
        <Grid align='center'>
              <Avatar style={{backgroundColor:'#1bbd7e'}}></Avatar>
              <h2 style = {{margin: 0}}>Sign Up</h2>
              <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
        </Grid>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {(props) => (
        <Form>
          <Field as={TextField} fullWidth name="fname" label='First Name'
                                  placeholder="Enter your name" helperText={
                                  <ErrorMessage name="fname" />
                              } />
          <Field as={TextField} fullWidth name="lname" label='Last Name'
                                  placeholder="Enter your name" helperText={
                                  <ErrorMessage name="lname" />
                              } />
          <Field as={TextField} fullWidth name="uname" label='User Name'
                                  placeholder="Enter your name" helperText={
                                  <ErrorMessage name="uname" />
                              } />
          <Field as={TextField} fullWidth name="email" label='Email'
                                placeholder="Enter your email" helperText={
                                <ErrorMessage name="email" />
                            } />
          <Field as={TextField} fullWidth name='password' type="password"
                                label='Password' placeholder="Enter your password"
                                helperText={
                                <ErrorMessage name="password" />
                            } />
                            <Field as={TextField} fullWidth name="confirmPassword" type="password"
                                label='Confirm Password' placeholder="Confirm your password"
                                helperText={
                                <ErrorMessage name="confirmPassword" />
                            } />
          <Button type='submit' variant='contained' disabled={props.isSubmitting}
                                color='primary'>{props.isSubmitting ? "Loading" : "Sign up"}</Button>
          <Typography > Already have an account ?
                <Link href="#" >
                  Sign In 
                </Link>
                </Typography>
          
         </Form>
         )}
         </Formik>
      </Paper>
    </Grid>
  )
}

export default SignUp