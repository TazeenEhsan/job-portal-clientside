import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/system';


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const AllJobs = () => {
    const [allJobs, setAllJobs] = useState();

    const navigate = useNavigate();


    useEffect(() => {
        fetch('https://shrouded-bastion-71024.herokuapp.com/jobPortalAllJobs')
            .then(res => res.json())
            .then(data => setAllJobs(data))

    }, [1]);



    const handleView = (id) => {

    }
    const handleDelete = (id) => {

        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://shrouded-bastion-71024.herokuapp.com/jobs/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {

                        alert('delete success');
                        navigate('/dashboard')
                    }
                });
        }

    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{}}>
                        <TableCell sx={{
                            color: 'white'
                        }}>Post Name</TableCell>
                        <TableCell align="right">Total Applicant</TableCell>
                        <TableCell align="right">Vacancies</TableCell>
                        <TableCell align="right">Shift</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Post Date</TableCell>
                        <TableCell align="right">Expire Date</TableCell>
                        <TableCell align="right">Salary</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {allJobs?.map((row) => (
                        <TableRow
                            key={allJobs._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.jobTitle}
                            </TableCell>
                            <TableCell align="right">{parseInt(row.vacancy) + 11}</TableCell>
                            <TableCell align="right">{row.vacancy}</TableCell>
                            <TableCell align="right">{row.shift}</TableCell>
                            <TableCell align="right">Full time</TableCell>
                            <TableCell align="right">{row.postDate}</TableCell>
                            <TableCell align="right">{row.expireDate}</TableCell>
                            <TableCell align="right">{row.salary}</TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right">


                                <Box>
                                    <Button onClick={() => handleView(row._id)}><EditIcon></EditIcon></Button>
                                    <Button onClick={() => handleDelete(row._id)}><DeleteIcon></DeleteIcon></Button>
                                    <Button onClick={() => handleView(row._id)}><VisibilityIcon></VisibilityIcon></Button>
                                </Box>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
};

export default AllJobs;