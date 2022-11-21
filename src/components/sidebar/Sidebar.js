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

const Sidebar = () => {
  return (
      <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          <div className="container" style={{ display: 'flex', alignItems: 'center' }}>
            
            <h6 >Business Consultant ™</h6>
          </div>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>

            <CDBSidebarMenuItem icon="sticky-note">Applicant list</CDBSidebarMenuItem>
            
            <CDBSidebarMenuItem icon="chart-line" iconType="solid">
              metrics
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
  )
};

export default Sidebar;