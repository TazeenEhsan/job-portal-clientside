import React from 'react';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@material-ui/lab';
import { Container } from '@mui/material';
import SignUp from '../SignUp/SignUp';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';


const SignIn = () => {

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Container maxWidth="sm">
            {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
            <Box sx={{ bgcolor: '#cfe8fc', width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Sign In" value="1" />
                            <Tab label="Sign Up" value="2" />

                        </TabList>
                    </Box>
                    <TabPanel value="1">Sign In</TabPanel>
                    <TabPanel value="2"><SignUp></SignUp> </TabPanel>

                </TabContext>
            </Box>
        </Container>


    );

};

export default SignIn;



