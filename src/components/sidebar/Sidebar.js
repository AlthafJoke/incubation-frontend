import React from 'react';
import {
  CDBSidebar,
  CDBSidebarHeader,
  CDBSidebarMenuItem,
  CDBSidebarContent,
  CDBSidebarMenu,
  CDBSidebarSubMenu,
  CDBSidebarFooter,
  CDBBadge,
  CDBContainer,
} from 'cdbreact';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate=useNavigate()
  return (
    <div className=''>
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
            
            <h6 >Business Consultant ™</h6>
          </div>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large" onClick={() => {navigate('/admin')}} >Applicant list</CDBSidebarMenuItem>

            <CDBSidebarMenuItem icon="sticky-note" onClick={() => {navigate('/approved')}} >Approved Applicant</CDBSidebarMenuItem>
            
            <CDBSidebarMenuItem icon="chart-line" iconType="solid">
              metrics
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
      
  )
};

export default Sidebar;