// import { AppBar, Button, Link } from '@mui/material';
import React from 'react';
import { BrowserRouter, NavLink, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Create from './Create';
import Edit from './Edit';
import View from './View';



import MuiAppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Paper from "@mui/material/Paper";
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from '@mui/material';
import AllJobs from './ALLJobs/AllJobs';


const drawerWidth = 540;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

const mdTheme = createTheme();



const Dashboard = () => {

    const navigate = useNavigate();
    const [open] = React.useState(false);

    const handleLogOut = () => {
        localStorage.setItem('isLogin', 'notlogin')
        localStorage.setItem('token', 'NULL')
        localStorage.setItem('user', 'No User')
        navigate('/signin')
    }

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: "24px", // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{
                                marginRight: "36px",
                            }}
                        >
                            {/* <MenuIcon /> */}
                            <Typography>This is From Menu Icon</Typography>
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                {/* <NotificationsIcon /> */}

                                <Typography
                                    component="h1"
                                    variant="h6"
                                    color="inherit"
                                    noWrap
                                    sx={{ flexGrow: 1 }}
                                >
                                    Notification
                                </Typography>

                            </Badge>
                        </IconButton>

                        <Button sx={{ color: 'white' }} onClick={handleLogOut}>LogOut</Button>
                    </Toolbar>
                </AppBar>
                {/* <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            px: [1],
                        }}
                    >
                        <IconButton>

                            <p>ChevronLeftIcon</p>

                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List>List Item</List>
                    <Divider />
                    <List>ListItem 2</List>
                </Drawer> */}

                <Grid container >
                    <Grid item xs={12} md={4} lg={1} >

                        <Box sx={{ marginTop: 5 }}>
                            <h5>Home</h5>
                            <h5>Jobs</h5>

                        </Box>
                    </Grid>
                    <Grid item xs={12} md={8} lg={10}>
                        <Box
                            component="main"
                            sx={{
                                backgroundColor: (theme) =>
                                    theme.palette.mode === "light"
                                        ? theme.palette.grey[100]
                                        : theme.palette.grey[900],
                                flexGrow: 1,
                                height: "100vh",
                                overflow: "auto",
                            }}
                        >
                            <Toolbar />
                            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                                <Grid container spacing={9}>

                                    <Grid item xs={12} md={8} lg={3}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: "flex",
                                                color: 'white',
                                                flexDirection: "column",

                                                backgroundColor: 'blue'
                                            }}
                                        >

                                            <Typography>Total Active Job</Typography>
                                            <Typography>
                                                5
                                            </Typography>
                                        </Paper>
                                    </Grid>

                                    <Grid item xs={12} md={4} lg={3}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: "flex",
                                                color: 'white',
                                                flexDirection: "column",
                                                backgroundColor: '#3000FF'

                                            }}
                                        >

                                            <Typography>
                                                Interview Schedule
                                            </Typography>
                                            <Typography>
                                                200
                                            </Typography>
                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={4} lg={3}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: "flex",
                                                color: 'white',
                                                flexDirection: "column",
                                                backgroundColor: 'blue'

                                            }}
                                        >

                                            <Typography

                                            >
                                                New Hiring
                                            </Typography>
                                            <Typography>
                                                5
                                            </Typography>

                                        </Paper>
                                    </Grid>
                                    <Grid item xs={12} md={4} lg={3}>
                                        <Paper
                                            sx={{
                                                p: 2,
                                                display: "flex",
                                                color: 'white',
                                                flexDirection: "column",
                                                backgroundColor: 'blue'

                                            }}
                                        >

                                            <Typography>
                                                Total Applicants
                                            </Typography>
                                            <Typography>
                                                200
                                            </Typography>
                                        </Paper>
                                    </Grid>


                                </Grid>
                                <br />
                                <Grid container justifyContent="flex-end">
                                    {/* <Button>Create</Button> */}
                                    <Create></Create>
                                </Grid>
                                <br />
                                <Grid item xs={12}>
                                    <Paper
                                        sx={{
                                            p: 2,

                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >


                                        <Typography sx={{ backgroundColor: 'blue', color: 'white', padding: '13px' }}>Recent Jpb Post</Typography>

                                        <AllJobs></AllJobs>

                                    </Paper>
                                </Grid>
                            </Container>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>


    );
};

export default Dashboard;


