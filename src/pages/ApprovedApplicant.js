import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Col } from "rsuite";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

const ApprovedApplicant = () => {
    const [approvedApplication, setApprovedApplication] = useState([])

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

  return (
    <div>
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
          {approvedApplication.map((application, index) => {
            return (
              <tr key={index}>
                <td>{application.id}</td>

                <td>{application.name}</td>

                <td>{application.status}</td>
                <td>
                    <button  className="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default ApprovedApplicant