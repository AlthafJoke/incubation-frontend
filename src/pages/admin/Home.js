import React from 'react'

import Sidebar from '../../components/sidebar/Sidebar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Navbar from '../../components/navbar/Navbar';

import Body from '../../components/body-content/Body';





const Home = () => {
  return (
    <div>
      
      
      <Navbar/>
      <Container fluid>
        
        <Row>
          <Col  xs={'auto'} md={'auto'}> <Sidebar/> </Col>
          <Col xs={'auto'} md={'8'}> <Body/>  </Col>
        </Row>
      </Container>
      
      
        
        
      
      
      </div>
  )
}

export default Home