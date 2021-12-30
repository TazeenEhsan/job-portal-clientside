

import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@mui/material/Typography';
import { Container, Grid, InputLabel, MenuItem, Select, TextareaAutosize, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Navigate, useNavigate } from 'react-router-dom';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};


const Create = () => {



    //==============================
    const [newJobData, setnewJobData] = useState({});

    const navigate = useNavigate();







    const token = JSON.parse(localStorage.getItem('token'));

    // console.log('islogin', isLogin);
    console.log('token is', token);



    // localStorage.setItem('token', JSON.stringify('no'))

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newregistrationData = { ...newJobData };
        newregistrationData[field] = value;

        setnewJobData(newregistrationData);
    }
    console.log(newJobData);

    const handleLoginSubmit = (e) => {

        const jobTitle = newJobData.jobTitle
        const shift = newJobData.shift
        const department = newJobData.department
        const level = newJobData.level
        const vacancy = newJobData.vacancy
        const salary = newJobData.salary
        const question = newJobData.question
        const description = newJobData.description
        const status = 'Active'

        const postDate = new Date().toLocaleString();

        var someDate = new Date();
        var numberOfDaysToAdd = 10;
        var result = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
        var expireDate = new Date(result).toLocaleString()


        const newJob = { jobTitle, shift, department, level, vacancy, salary, status, postDate, expireDate, question, description };

        console.log('user is', newJob);
        console.log('token is', token);
        localStorage.setItem('newJob', JSON.stringify(newJob))



        fetch('http://localhost:5000/jobPortalAllJobs', {
            method: 'POST',
            headers: {
                'authorization': `${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(newJob)
        })
            .then();

        e.preventDefault();
        navigate('/dashboard')
        setOpen(false);
    }
    ///=========================================




    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = (e) => {
        handleLoginSubmit(e);
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" sx={{ backgroundColor: 'green', color: 'white' }} onClick={handleClickOpen}>
                <AddCircleOutlineIcon></AddCircleOutlineIcon> Create
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>

                </BootstrapDialogTitle>
                <DialogContent dividers>



                    <Container>
                        <Grid container spacing={2}>
                            <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                                <Typography variant="body1" gutterBottom>Register</Typography>
                                <form onSubmit={handleLoginSubmit}>

                                    <TextField
                                        sx={{ width: '420px', m: 1 }}
                                        id="standard-basic"
                                        label="Job Title"
                                        name="jobTitle"

                                        onBlur={handleOnBlur}
                                        variant="standard" required />
                                    <Typography sx={{ fontSize: '15px' }}>Shift</Typography>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={registrationData.age}
                                        sx={{ width: '420px', m: 1 }}
                                        name='shift'
                                        label="Shift"
                                        onChange={handleOnBlur}
                                    >
                                        <MenuItem value={'Day'}>Day</MenuItem>
                                        <MenuItem value={'Night'}>Night</MenuItem>

                                    </Select>
                                    <Typography sx={{ fontSize: '15px' }}>Department</Typography>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={registrationData.age}
                                        sx={{ width: '420px', m: 1 }}
                                        name='department'
                                        label="Department"
                                        onChange={handleOnBlur}
                                    >
                                        <MenuItem value={'A'}>A</MenuItem>
                                        <MenuItem value={'B'}>B</MenuItem>

                                    </Select>
                                    <Typography sx={{ fontSize: '15px' }}>Level</Typography>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={registrationData.age}
                                        sx={{ width: '420px', m: 1 }}
                                        name='level'
                                        label="Level"
                                        onChange={handleOnBlur}
                                    >
                                        <MenuItem value={'Junior'}>Junior</MenuItem>
                                        <MenuItem value={'Senior'}>Senior</MenuItem>

                                    </Select>

                                    <TextField
                                        sx={{ width: '420px', m: 1 }}
                                        id="standard-basic"
                                        label="Vacancy"
                                        name="vacancy"
                                        type='number'
                                        onBlur={handleOnBlur}
                                        variant="standard" required />
                                    <TextField
                                        sx={{ width: '420px', m: 1 }}
                                        id="standard-basic"
                                        label="Salary"
                                        name="salary"
                                        type='number'
                                        onBlur={handleOnBlur}
                                        variant="standard" required />



                                    <Typography sx={{ fontSize: '15px' }}>Filter Question</Typography>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        // value={registrationData.age}
                                        sx={{ width: '420px', m: 1 }}
                                        name='question'
                                        label="Filter Question"
                                        onChange={handleOnBlur}
                                    >
                                        <MenuItem value={'Question 1'}>Question 1</MenuItem>
                                        <MenuItem value={'Question 1'}>Question 2</MenuItem>

                                    </Select>

                                    <TextareaAutosize
                                        aria-label="minimum height"
                                        minRows={3}
                                        name='description'
                                        placeholder="Dscription"
                                        style={{ width: 420, marginLeft: '10px' }}
                                    />



                                    <Button sx={{ width: '75%', m: 1, fontSize: '15px' }} type="submit" variant="contained">Save and add new</Button>
                                    <Button sx={{ width: '75%', m: 1, fontSize: '15px' }} type="submit" variant="contained">Save and add new</Button>
                                    {/* <Button sx={{ width: '40%', m: 1 }} type="submit" variant="contained">Save</Button> */}


                                </form>



                            </Grid>
                            <Grid item xs={12} md={6}>
                                <img style={{ width: '100%' }} src="" alt="" />
                            </Grid>
                        </Grid>
                    </Container>

                </DialogContent>

                {/* <DialogActions>
                    <Grid container justifyContent="flex-start">
                        <Button autoFocus type='submit' onClick={handleLoginSubmit}>
                            Save and add another
                        </Button>
                    </Grid>
                    <Button autoFocus onClick={handleClose}>
                        Save
                    </Button>
                </DialogActions> */}
            </BootstrapDialog>
        </div >

    );
};

export default Create;