import { Alert, Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const SignUp = () => {

    const [registrationData, setRegistrationData] = useState({});

    const { user, isLoading, isLogin, token, registerUser } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newregistrationData = { ...registrationData };
        newregistrationData[field] = value;

        setRegistrationData(newregistrationData);
    }


    const handleLoginSubmit = e => {
        if (registrationData.password !== registrationData.password2) {
            alert('Your password did not match');
            e.preventDefault();

        }
        registerUser(registrationData.email, registrationData.password, registrationData.name, registrationData.phone, registrationData.date, registrationData.gender);
        e.preventDefault();

    }


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid >
                    <Typography variant="body1" gutterBottom>Sign Up</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <Grid
                            container
                            rowSpacing={1}
                            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
                        >
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="First Name"
                                    name="name"
                                    onBlur={handleOnBlur}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    name='phone'
                                    label="Phone Number"
                                    onBlur={handleOnBlur}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    type="date"
                                    name="date"
                                    id="outlined-required"
                                    onBlur={handleOnBlur}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Gender"
                                    name="gender"
                                    onBlur={handleOnBlur}
                                />
                            </Grid>
                        </Grid>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onBlur={handleOnBlur}
                            autoFocus
                        />
                        <Box sx={{ display: "flex", gap: 2 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password2"
                                label="Confirm password"
                                type="Confirm password"
                                id="password"
                                onBlur={handleOnBlur}
                                autoComplete="current-password"
                            />
                        </Box>

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Sign Up</Button>
                        {/* <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink> */}
                    </form>



                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}

                </Grid>

            </Grid>
        </Container>

    );
};

export default SignUp;