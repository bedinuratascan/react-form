import React from 'react';
import { Avatar, Grid, Paper, TextField, FormControlLabel, Checkbox, Button, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const Login = ({ handleChange }) => {

    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: '0 auto' }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnStyle = { margin: '8px 0' }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required />
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required />
                <FormControlLabel
                    control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Remember me"
                />
                <Button type='submit' color='primary' variant='contained' fullWidth style={btnStyle}>Sign in</Button>
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
