import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import Navbar from "../../../components/navbar/Navbar";
import Sidebar from "../../../components/sidebar/Sidebar";

const ApprovedApplicant = () => {
  const [approvedApplication, setApprovedApplication] = useState([]);
  const [refetch,setRefetch]=useState(false)

  useEffect(() => {
    try {
      fetch("http://127.0.0.1:8000/api/approved/", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => setApprovedApplication(resp));
    } catch (error) {
      console.log(error);
    }
  }, [refetch]);
  
  let deleteApplication = async (id) => {
    console.log('delete is working')
    try {
      let response = await fetch(`http://127.0.0.1:8000/api/appDelete/${id}/ `, {
            method:'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            
        })
        // .then(() => console.log('form submited'))
        .then((response) => {
          console.log('success')
          if(response.status === 204){
            alert('successfully deleted')
            setRefetch(true)
          }
          else{
            alert('something went wrong')
          }
        })
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Navbar />
      <Container fluid>
      

        <Row>
          <Col  xs={'auto'} md={'auto'}>
            
            <Sidebar />
          </Col>
          <Col  xs={'auto'} md={'8'}>
          <h3 className="text-center mt-3">Approved Applicants</h3>
            
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Company Name</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {approvedApplication.map((application) => {
                  return (
                    <tr key={application.id}>
                      <td>{application.id}</td>

                      <td>{application.companyname}</td>

                      <td>{application.status}</td>
                      <td>
                        <button className="btn btn-danger" onClick={() => deleteApplication(application.id)}>Delete</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ApprovedApplicant;
