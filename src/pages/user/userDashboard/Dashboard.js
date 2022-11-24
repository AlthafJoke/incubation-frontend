import React, { useContext, useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Navbar from "../../../components/navbar/Navbar";
import AuthContext from "../../../context/AuthContext";
import Table from "react-bootstrap/Table";
import Sidebar from "../../../components/sidebar/Sidebar";
import UserNavbar from "../../../components/navbar/UserNavbar";

const Dashboard = () => {
  const [approvedApplication, setApprovedApplication] = useState([]);
  const [status, setStatus] = useState([]);
  const { email } = useContext(AuthContext);

  useEffect(() => {
    try {
      fetch(`http://127.0.0.1:8000/api/getapplication/${email.user_id}/`, {
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

  // useEffect(() => {
  //   try {
  //     fetch('http://127.0.0.1:8000/api/crudApplication/', {
  //       method: "GET",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //     })
  //       .then((resp) => resp.json())
  //       .then((resp) => setStatus(resp));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  // console.log('this is status :' , status)

  return (
    <div>
      <div>
        <UserNavbar />
        <Container>
          <Row>
            <Col xs={"auto"} md={"auto"}></Col>
            <Col xs={"auto"} md={"8"}>
              <h3 className="text-center mt-3">Your Application Status</h3>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Company Name</th>
                    <th>Status</th>
                    <th>Slot confirmed</th>
                  </tr>
                </thead>
                <tbody>
                  {approvedApplication.map((application) => {
                    return (
                      <tr key={application.id}>
                        <td>{application.id}</td>

                        <td>{application.companyname}</td>

                        <td>{application.status}</td>
                        {application.is_slot_allotted &&
                          application.is_approved && (
                            <td>
                              {" "}
                              <button className="btn btn-success">
                                booking complete
                              </button>{" "}
                            </td>
                          )}
                        {!application.is_slot_allotted &&
                          application.is_approved && (
                            <td>
                              <button className="btn btn-secondary">
                                waiting List
                              </button>
                            </td>
                          )}
                        {application.is_rejected && <td>Slot not available</td>}
                        {!application.is_approved && !application.is_rejected && (
                          <td>
                            <button className="btn btn-secondary">
                              waiting List
                            </button>
                          </td>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
