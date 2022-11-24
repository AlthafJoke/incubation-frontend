import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Button from "@mui/material/Button";

import "./slot.css";

import Dropdown from "react-bootstrap/Dropdown";
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';


import Modal from "react-bootstrap/Modal";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  //   textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SlotBooking = () => {
  const [slots, setSlots] = useState([]);

  const [selectedSlot, setSelectedSlote] = useState("");
  const [selectedApplication, setSelectedApplication] = useState("");
  const [waitingApplications, setWaitingApplications] = useState([]);
  const [submitSlot, setSubmitSlot] = useState(false)





  useEffect(() => {
    try {
      fetch("http://127.0.0.1:8000/api/ApplicationSlot/", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => setSlots(resp));
    } catch (error) {
      console.log(error);
    }
  }, []);

 

  useEffect(() => {

    // to get waiting application that is approved but no slot allocated
    fetch("http://127.0.0.1:8000/api/waiting-list/", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((resp) => setWaitingApplications(resp));

  }, [submitSlot])
 

  console.log(slots);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (id) => {
    setSelectedSlote(id)
    console.log("this is slot id:", id)
   
    return setShow(true);
   
  }

  const handleApprove = (id) => {
    setSelectedApplication(id)
    console.log('this is handle approve applicant id:', selectedApplication, id)
  }

  const handleAllocation = () => {
    try{
      fetch(`http://127.0.0.1:8000/api/slot-allocate/${selectedApplication}/${selectedSlot}/ `, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({status:'Approved'}),
      }).then(response => {
        console.log("response is:",response.status)
        if (response.status === 200) {
          setShow(false);
          setSubmitSlot(true)
          console.log("success slot allocation complete");
          window.location.reload(false);
          // setRefetch(true)
          Swal.fire({
            title: 'success',
            text: 'Application submitted successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          
        }
      })
     

    }
    catch (error){
      Swal.fire({
        title: 'Error',
        text: 'Please fill data',
        icon: 'error',
        confirmButtonText: 'Ok'
      })

    }
      
    
  }

  





  

  return (
    <>
      <Navbar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={3}>
            <Sidebar />
          </Grid>
          <Grid item xs={6} md={9}>
            <Item>
              <div className="slot-container">
                {slots.map((slot, index) => {
                  return slot.status ? (
                    <div className="slot-approve" key={slot.id}></div>
                  ) : (
                    <div
                      className="slot"
                      key={slot.id}
                      onClick={() =>handleShow(slot.id)}
                    ></div>
                  );
                })}
              </div>
              <>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>Company</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Dropdown>
                      <Dropdown.Toggle
                        variant="success"
                        id="dropdown-basic"
                      ></Dropdown.Toggle>

                      <Dropdown.Menu>
                        {waitingApplications?.map((e) => {
                          return (
                            
                            <Dropdown.Item
                            key={e.id}
                            onClick={() => {
                              handleApprove(e.id);
                            }}
                              
                            >{e.companyname}
                               
                            </Dropdown.Item>
                          );
                        })}
                      </Dropdown.Menu>
                    </Dropdown>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <button variant="primary" onClick={handleAllocation}>
                      Save Changes
                    </button>
                  </Modal.Footer>
                </Modal>
              </>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default SlotBooking;
