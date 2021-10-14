import React from 'react';
import { Avatar, Grid, Paper, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup';


const Login = ({ handleChange }) => {
    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: '0 auto' }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnStyle = { margin: '8px 0' }
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    const validationSchema = yup.object().shape({
        username: yup.string().email('Must be a valid email').required("Username is required"),
        password: yup.string().required("Password is required")
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
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {
                        (props) => (
                            <Form>
                                <Field as={TextField} label='Username' name="username" placeholder='Enter username' fullWidth required />
                                <ErrorMessage name="username">
                                    {msg => <div style={{ color: 'red', fontSize: 12 }}>{msg}</div>}
                                </ErrorMessage>
                                <Field as={TextField} label='Password' name="password" placeholder='Enter password' type='password' fullWidth required />
                                <ErrorMessage name="password">
                                    {msg => <div style={{ color: 'red', fontSize: 12 }}>{msg}</div>}
                                </ErrorMessage>
                                <Field as={FormControlLabel}
                                    control={
                                        <Checkbox
                                            color="primary"
                                        />
                                    }
                                    label="Remember me"
                                    name="remember"
                                />
                                <Button type='submit' color='primary' variant='contained' fullWidth style={btnStyle} disabled={props.isSubmitting}>{props.isSubmitting ? "Loading" : "Sign in"}</Button>
                            </Form>
                        )
                    }
                </Formik>
                <Typography>
                    <Link href='#'>
                        Forgot password?
                    </Link>
                </Typography>
                <Typography> Do you have an account?
                    <Link href='#' onClick={() => handleChange("event", 1)}>
                        Sign up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login
