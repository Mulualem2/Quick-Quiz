import React from "react";
import { Grid, Avatar, TextField, Button, Paper, Typography, Link } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import api from '../api/api'

const ForgotPassword = ({ handleChange }) => {
    const initialValues = {
        email: ''
    }
const validationSchema = Yup.object().shape({
        email: Yup.string().email('please enter valid email').required("Required")
    })
    const onSubmit = values => {
        console.log(values)
        api.post("/forgotPassword", values).then(
          (response) => {
              var result = response.data;
              console.log(result);
          },
          (error) => {
              console.log(error);
          }
      );
    }

return(
    <Grid>
        <Paper elevation={10} sx={{ padding :10, height:'25vh',width:280, margin:"20px auto"}}>
        <Grid align='center'>
              <Avatar style={{backgroundColor:'#1bbd7e'}}><LockOutlinedIcon/></Avatar>
              <h2>Forgot Password</h2>
        </Grid>
        <Formik initialValues={initialValues} onSubmit={(event) => onSubmit(event) } validationSchema={validationSchema}>
        {Formik =>{
          return <Form>
          <Field as={TextField} label='Email' name="email"
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage name="email">
                                { msg => <div style={{ color: 'red' }}>{msg}</div> }
                            </ErrorMessage>}
                                />
          <Button type='submit' color='primary' variant="contained" disabled={!Formik.isValid}
                                style={ {margin: '8px 0'} } fullWidth>Submit</Button>
                                </Form>
        }}
        </Formik>
        <Typography > Don't you have an account ?
          <Link href="/signup" onClick={() => handleChange("event", 1)} >
                        Sign Up
                </Link>
                </Typography>
        </Paper>
    </Grid>
);
}

export default ForgotPassword;