import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Col } from 'rsuite';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';


const Body = () => {
  const [newApplication, setApplication] = useState([])

  useEffect(()=> {
    
  }, [])
  return (
    <div>
      <h3 className='text-center'>New applications</h3>
      {/* <Table striped bordered hover>
        
      <thead>
        <tr>
          <th>id</th>
          <th>Company Name</th>
          <th>Status</th>
          <th >Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Pending</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Approve</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Reject</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            

          </td>
          
        </tr>
        
        
      </tbody>
    </Table> */}

    {newApplication.map(application => {
      return <h2>{application}</h2>
    })}
    </div>
  )
}

export default Body