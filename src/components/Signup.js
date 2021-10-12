import { Grid, Paper, Avatar, Typography, TextField, Button, Checkbox, Radio, RadioGroup } from '@material-ui/core'
import React from 'react'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { FormControlLabel, FormControl, FormLabel } from '@material-ui/core/';
import { Formik, Field, Form } from 'formik'

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
    }

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
                <Formik initialValues={initialValues} onSubmit={onSubmit}>
                    {
                        (props) => (
                            <Form>
                                <Field as={TextField} fullWidth name='name' label='Name' placeholder='Please enter name' />
                                <Field as={TextField} fullWidth name='email' label='Email' />
                                <FormControl component="fieldset" style={{ marginTop: 5 }}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <Field as={RadioGroup} aria-label="Gender" name="gender" style={{ display: 'initial' }}>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </Field>
                                </FormControl>
                                <Field as={TextField} fullWidth name="phoneNumber" label='Phone Number' />
                                <Field as={TextField} fullWidth name="password" label='Password' />
                                <Field as={TextField} fullWidth name="confirmPassword" label='Confirm Password' />
                                <FormControlLabel control={<Field as={Checkbox} name="termsAndConditions" />}
                                    label="I accept the terms and conditions."
                                />
                                <Button type='submit' color='primary' variant='contained' fullWidth >Sign up</Button>
                            </Form>
                        )
                    }
                </Formik>
            </Paper>
        </Grid>
    )
}

export default Signup
