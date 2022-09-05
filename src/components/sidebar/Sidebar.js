import React from 'react';
import SidebarHeader from './Header';
import SidebarContent from './Content';
import SidebarFooter from './Footer';
import MenuItem from './MenuItem';
import {CDBSidebar as Sidebar} from 'cdbreact';
import '../../assets/css/Sidebar.css';

const SidebarComponent = () => {
  return (
    <div id='sidebar-wrapper'>
      <Sidebar id='sidebar' textColor="#fff" backgroundColor="#2e3035">
        <SidebarHeader/>
        
        <SidebarContent>
          <MenuItem icon = "columns">Sobre mim</MenuItem>
          <MenuItem icon = "table">Experiências</MenuItem>
          <MenuItem icon = "user">Skills</MenuItem>
          <MenuItem icon = "chart-line">Certificações</MenuItem>
        </SidebarContent>

        <SidebarFooter/>

      </Sidebar>
    </div>
  );
};

export default SidebarComponent;

