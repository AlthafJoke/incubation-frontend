import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useContext } from "react";
import Swal from "sweetalert2";
import { Loader, Placeholder } from "rsuite";

import APIService from "../../../components/APIService";

import { useEffect, useState } from "react";
import axios from "axios";
import RegSuccess from "../../RegSuccess";
import AuthContext from "../../../context/AuthContext";

const baseUrl = "http://127.0.0.1:8000/api/application/";

function ApplyForm() {
  const { email } = useContext(AuthContext);
  console.log(email.user_id);
  // const Swal = require('sweetalert2')
  const [applicationData, setApplicationData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    companyname: "",
    problem: "",
    success: "",
  });

  //Change element value
  const handleChange = (event) => {
    setApplicationData({
      ...applicationData,
      [event.target.name]: event.target.value,
    });
  };

  //end

  // Form submit
  const submitForm = (e) => {
    e.preventDefault();
    const applicationFormData = new FormData();
    applicationFormData.append("user", email.user_id);
    applicationFormData.append("name", applicationData.name);
    applicationFormData.append("email", applicationData.email);
    applicationFormData.append("phone", applicationData.phone);
    applicationFormData.append("address", applicationData.address);
    applicationFormData.append("city", applicationData.city);
    applicationFormData.append("state", applicationData.state);
    applicationFormData.append("companyname", applicationData.companyname);
    applicationFormData.append("problem", applicationData.problem);

    try {
      axios.post(baseUrl, applicationFormData).then((response) => {
        console.log(response.data);
        setApplicationData({
          // this is made to make form empty
          name: "",
          email: "",
          phone: "",
          address: "",
          city: "",
          state: "",
          companyname: "",
          problem: "",
          success: true,
        });

        Swal.fire({
          title: "success",
          text: "Application submitted successfully",
          icon: "success",
          confirmButtonText: "Ok",
        });
      });
    } catch (error) {
      console.log(error);
      setApplicationData({ status: false });
      Swal.fire({
        title: "Error",
        text: "Please fill data",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };
  // end

  return (
    <div className="container card shadow p-5 Applyform">
      {applicationData.success ? (
        <RegSuccess />
      ) : (
        <>
          
          <h3 className=" text-center">Please fill your details</h3>

          <Form onSubmit={(e) => submitForm(e)} className=" ">
            <Row className="mt-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  value={applicationData.name}
                  onChange={handleChange}
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  value={applicationData.email}
                  onChange={handleChange}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group className="mt-3" controlId="formGridAddress1">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                value={applicationData.phone}
                onChange={handleChange}
                placeholder="+91"
                name="phone"
                required
              />
            </Form.Group>

            <Form.Group className="mt-3" controlId="formGridAddress2">
              <Form.Label>Address </Form.Label>
              <Form.Control
                value={applicationData.address}
                onChange={handleChange}
                placeholder="Apartment, studio, or floor"
                name="address"
                required
              />
            </Form.Group>

            <Row className="mt-3">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  value={applicationData.city}
                  onChange={handleChange}
                  name="city"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label name="state">State</Form.Label>
                <Form.Control
                  value={applicationData.state}
                  onChange={handleChange}
                  name="state"
                  required
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Company name</Form.Label>
                <Form.Control
                  value={applicationData.companyname}
                  onChange={handleChange}
                  name="companyname"
                  required
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Tell us your problems</Form.Label>
              <Form.Control
                value={applicationData.problem}
                onChange={handleChange}
                name="problem"
                required
              />
            </Form.Group>

            <Button type="submit">Submit</Button>
          </Form>
        </>
      )}
    </div>
  );
}

export default ApplyForm;
