import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/navbar/Navbar'

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Table from "react-bootstrap/Table";
import Sidebar from '../../../components/sidebar/Sidebar';
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    //   textAlign: "center",
    color: theme.palette.text.secondary,
  }));

const BookedApplicant = () => {
  const [waitingApplications, setWaitingApplications] = useState([]);

  const handleWaitingApplications = () => {
    try {
        fetch("http://127.0.0.1:8000/api/booked-applicant/", {
            method: "GET",
            headers: {
              "content-type": "application/json",
            },
          })
            .then((resp) => resp.json())
            .then((resp) => setWaitingApplications(resp));
      } catch (error) {
        console.log(error);
      }

  }

  useEffect(() => {
    handleWaitingApplications();
  },[])

  return (
    <div>
        <Navbar />
      <Box sx={{ flexGrow: 1 }} className="mt-3">
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={6} md={9}>
            <Item>
          <h3 className="text-center mt-3">Slot Booked Applicant</h3>

            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Company Name</th>
                  <th>Status</th>
                  
                </tr>
              </thead>
              <tbody>
                {waitingApplications.map((application) => {
                  return (
                    <tr key={application.id}>
                      <td>{application.id}</td>

                      <td>{application.companyname}</td>

                      <td>{application.status}</td>
                      
                    </tr>
                  );
                })}
              </tbody>
            </Table>
              
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default BookedApplicant