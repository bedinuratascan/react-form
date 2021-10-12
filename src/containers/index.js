import { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Login from '../components/Login';
import Signup from '../components/Signup';

const SignInOutContainer = () => {
    const [value, setValue] = useState(0);
    const paperStyle = { width: 340, margin: '20px auto' }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    function TabContainer(props) {
        return (
            <Typography component="div">
                {props.children}
            </Typography>
        );
    }

    TabContainer.propTypes = {
        children: PropTypes.node.isRequired,
    };


    return (
        <Paper style={paperStyle} elevation={20}>
            <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}

            >
                <Tab label="Sign In" />
                <Tab label="Sign Up" />
            </Tabs>
            {value === 0 && <TabContainer><Login handleChange={handleChange} /></TabContainer>}
            {value === 1 && <TabContainer><Signup /></TabContainer>}
        </Paper>
    )
}



export default SignInOutContainer
