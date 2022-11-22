import React from "react";
import { Grid, Avatar, TextField, Button, Paper, Typography, Link } from "@mui/material";
import {FormControlLabel} from "@mui/material";
import {Checkbox} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
//import Change from './Change'

const Login = ({ handleChange }) => {
  const initialValues = {
    username: '',
    password: '',
    remember: false
}
const validationSchema = Yup.object().shape({
    username: Yup.string().email('please enter valid email or username').required("Required"),
    username: Yup.string().required("Required"),
    password: Yup.string().required("Required")
})
const onSubmit = (values, props) => {
    console.log(values)
    setTimeout(() => {
        props.resetForm()
        props.setSubmitting(false)
    }, 2000)

}
  return (
    <Grid>
      <Paper elevation={10} sx={{ padding :10, height:'50vh',width:280, margin:"20px auto"}}>
        <Grid align='center'>
              <Avatar style={{backgroundColor:'#1bbd7e'}}><LockOutlinedIcon/></Avatar>
              <h2>Sign In</h2>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {(props) => (
                        <Form>
          <Field as={TextField} label='Username' name="username"
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage name="username"/>}
                            /> <br></br>
          <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" >
                                  {errorMsg => <div className = "error">{errorMsg}</div>}
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
          <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={ {margin: '8px 0'} } fullWidth>{props.isSubmitting ? "Loading" : "Sign in"}</Button>
          </Form>
                    )}
          </Formik>
          <Typography>
               <Link href="#" >
                  Forgot password ?
               </Link>
          </Typography>
          <Typography > Do you have an account ?
          <Link href="/signup" onClick={() => handleChange("event", 1)} >
                        Sign Up
                </Link>
                </Typography>
        
      </Paper>
    </Grid>
  );
}

export default Login;
