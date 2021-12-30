import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import SignUp from '../SignUp/SignUp';
import useAuth from '../../../hooks/useAuth';



const SignIn = () => {

    const [value, setValue] = React.useState('1');
    const [loginData, setLoginData] = useState({});

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    const { loginUser } = useAuth()



    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password);
        e.preventDefault();
    }
    return (
        <Container maxWidth="sm">

            <Box sx={{ bgcolor: '#cfe8fc', width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example" >
                            <Tab label="Sign In" value="1" />
                            <Tab label="Sign Up" value="2" />

                        </TabList>
                    </Box>
                    <TabPanel value="1">Sign In

                        <Grid container spacing={2}>
                            <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                                <Typography variant="body1" gutterBottom></Typography>
                                <form onSubmit={handleLoginSubmit}>

                                    <TextField
                                        sx={{ width: '100%', m: 1 }}

                                        id="standard-basic"
                                        label="Your Email"
                                        name="email"
                                        type="email"
                                        onBlur={handleOnBlur}
                                    />

                                    <TextField
                                        sx={{ width: '100%', m: 1 }}
                                        id="standard-basic"
                                        label="Your Password"
                                        type="password"
                                        name="password"
                                        onBlur={handleOnBlur}
                                    />

                                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Sign In</Button>

                                </form>



                                {/* {user?.email && <Alert severity="success">User Created successfully!</Alert>} */}

                            </Grid>

                        </Grid>


                    </TabPanel>

                    <TabPanel value="2"><SignUp></SignUp> </TabPanel>

                </TabContext>

            </Box>

            <Grid item xs={12} md={6}>
                {/* <img style={{ width: '100%' }} src="" alt="no img" /> */}
            </Grid>
        </Container>


    );

};

export default SignIn;



