import { Grid, Paper, Avatar, Typography, TextField, Button, Checkbox, Radio, RadioGroup } from '@material-ui/core'
import React from 'react'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { FormControlLabel, FormControl, FormLabel } from '@material-ui/core/';
import { Formik, Field, Form } from 'formik'

const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: '0 auto' }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }

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
                <Formik>
                    {
                        (props) => (
                            <Form>
                                <TextField fullWidth label='Name' placeholder='Please enter name' />
                                <TextField fullWidth label='Email' />
                                <FormControl component="fieldset" style={{ marginTop: 5 }}>
                                    <FormLabel component="legend">Gender</FormLabel>
                                    <RadioGroup aria-label="Gender" style={{ display: 'initial' }}>
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                                <TextField fullWidth label='Phone Number' />
                                <TextField fullWidth label='Password' />
                                <TextField fullWidth label='Confirm Password' />
                                <FormControlLabel control={<Checkbox value="checkedA" />}
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
