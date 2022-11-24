import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Col } from "rsuite";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

const Body = () => {
  const [newApplication, setApplication] = useState([]);
  const [refetch,setRefetch]=useState(false)

  // const [editApplication, setEditApplication]
  const handleApprove = (id) => {
    
      fetch(`http://127.0.0.1:8000/api/StatusUpdate/${id}/ `, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({status:'Approved'}),
      }).then(response => {
        if (response.status === 201) {
          console.log("deleted success");
          setRefetch(true)

        }
        else {
          console.log('something went wrong')
        }
        
      })

  };
  const handleReject = (id) => {
    
    fetch(`http://127.0.0.1:8000/api/StatusUpdate/${id}/ `, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({status:'Rejected', is_rejected:true}),
    }).then(response => {
      if (response.status === 201) {
        console.log("success");
        setRefetch(true)

      }
      console.log(response)
      
    })

};

  
  useEffect(() => {
    try {
      fetch("http://127.0.0.1:8000/api/application/", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((resp) => setApplication(resp));
    } catch (error) {
      console.log(error);
    }
    console.log(12121)
  }, [refetch]);
  return (
    <div className="">
      <h3 className="text-center mt-3">New applications</h3>
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
          {newApplication.map((application, index) => {
            return (
              <tr key={index}>
                <td>{index+1}</td>

                <td>{application.companyname}</td>

                <td>{application.status}</td>
                <td>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                    ></Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item
                        onClick={() => {
                          handleApprove(application.id);
                        }}
                      >
                        Approve
                      </Dropdown.Item>
                      <Dropdown.Item
                        onClick={() => {
                          handleReject(application.id);
                        }}
                      >
                        Reject
                      </Dropdown.Item>
                     
                      
                    </Dropdown.Menu>
                  </Dropdown>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Body;
