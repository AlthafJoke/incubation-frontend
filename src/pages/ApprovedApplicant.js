import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Col, Container, Row } from "rsuite";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";

const ApprovedApplicant = () => {
  const [approvedApplication, setApprovedApplication] = useState([]);

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
  }, []);
  
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
      <Container >
        <Row>
          <Col  >
            
            <Sidebar />
          </Col>
          <Col  >
            
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
