import { Box, TextField } from '@mui/material';
import React from 'react';

const SignUp = () => {
    return (
        <div>
            <h1>Sign Up</h1>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Required"
                        defaultValue="Hello World"
                    />

                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                    />


                </div>
            </Box>
        </div>
    );
};

export default SignUp;