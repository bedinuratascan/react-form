import { Grid, Paper, Avatar, Typography, TextField, Button, Checkbox, Radio, RadioGroup } from '@material-ui/core'
import React from 'react'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { FormControlLabel, FormControl, FormLabel } from '@material-ui/core/';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as yup from 'yup';
import FormHelperText from '@material-ui/core/FormHelperText';

const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: '0 auto' }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const initialValues = {
        name: '',
        email: '',
        gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }

    const onSubmit = (values, props) => {
        console.log(values);
        console.log(props);
        setTimeout(()=>{
            props.resetForm();
            props.setSubmitting(false);
        }, 2000)
    }

    const validationSchema = yup.object().shape({
        name: yup.string().min(3, 'Too Short!').max(15, 'Too Long!').required("Name is required"),
        email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
        gender: yup.string().oneOf(["male", "female"], "Gender is required").required("Gender is required"),
        phoneNumber: yup.number()
            .typeError("That doesn't look like a phone number")
            .required('Phone number is required'),
        password: yup.string().required('Password is required'),
        confirmPassword: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match'),
        termsAndConditions: yup.string().oneOf(["true"], "Accept term & conditions")
    })

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account!</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {
                        (props) => (
                            <Form>
                                <Field as={TextField} fullWidth name='name' label='Name' placeholder='Please enter name' />
                                <ErrorMessage name="name">
                                    {msg => <div style={{ color: 'red', fontSize: 12 }}>{msg}</div>}
                                </ErrorMessage>
                                <Field as={TextField} fullWidth name='email' label='Email' />
                                <ErrorMessage name="email">
                                    {msg => <div style={{ color: 'red', fontSize: 12 }}>{msg}</div>}
                                </ErrorMessage>
                                <FormControl component="fieldset" style={{ marginTop: 5 }}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <Field as={RadioGroup} aria-label="Gender" name="gender" style={{ display: 'initial' }}>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </Field>
                                </FormControl>
                                <FormHelperText>
                                    <ErrorMessage name="gender">
                                        {msg => <div style={{ color: 'red', fontSize: 12 }}>{msg}</div>}
                                    </ErrorMessage>
                                </FormHelperText>
                                <Field as={TextField} fullWidth name="phoneNumber" label='Phone Number' />
                                <ErrorMessage name="phoneNumber">
                                    {msg => <div style={{ color: 'red', fontSize: 12 }}>{msg}</div>}
                                </ErrorMessage>
                                <Field as={TextField} fullWidth name="password" type="password" label='Password' />
                                <ErrorMessage name="password">
                                    {msg => <div style={{ color: 'red', fontSize: 12 }}>{msg}</div>}
                                </ErrorMessage>
                                <Field as={TextField} fullWidth name="confirmPassword" type="password" label='Confirm Password' />
                                <ErrorMessage name="confirmPassword">
                                    {msg => <div style={{ color: 'red', fontSize: 12 }}>{msg}</div>}
                                </ErrorMessage>
                                <FormControlLabel control={<Field as={Checkbox} name="termsAndConditions" />}
                                    label="I accept the terms and conditions."
                                />
                                <FormHelperText>
                                    <ErrorMessage name="termsAndConditions">
                                        {msg => <div style={{ color: 'red', fontSize: 12 }}>{msg}</div>}
                                    </ErrorMessage>
                                </FormHelperText>
                                <Button type='submit' disabled={props.isSubmitting} color='primary' variant='contained' fullWidth >{props.isSubmitting ? "Loading" : "Sign up"}</Button>
                            </Form>
                        )
                    }
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Signup
