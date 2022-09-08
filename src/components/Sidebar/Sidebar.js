import React, {useEffect, useState} from 'react';
import SidebarHeader from './SidebarHeader';
import SidebarContent from './SidebarContent';
import SidebarFooter from './SidebarFooter';
import SidebarMenuItem from './SidebarMenuItem';
import {CDBSidebar as Sidebar} from 'cdbreact';
import manageSessionStorage from '../../helpers/manageSessionStorage';
import '../../assets/css/Sidebar.css';


const SidebarComponent = () => {

  const [sidebarClass, setSidebarClass] = useState('sidebar-wrapper-hidden');
  
  useEffect(()=>{
    if(manageSessionStorage().get('selected')){
      setSidebarClass('sidebar-wrapper');
    }
      
  },[]);
  window.addEventListener('continueClicked', () => {
    setSidebarClass('sidebar-wrapper');
  });

  return (

      <div id={sidebarClass}>
        <Sidebar id='sidebar' textColor="#fff" backgroundColor={/*"#2e3035"*/ "#2e3035" }>
          <SidebarHeader/>
          
          <SidebarContent>
            <SidebarMenuItem icon="columns" identifier='aboutme'>Sobre mim</SidebarMenuItem>
            <SidebarMenuItem icon="table" identifier='experience'>Experiências</SidebarMenuItem>
            <SidebarMenuItem icon="user" identifier='skills'>Skills</SidebarMenuItem>
            <SidebarMenuItem icon="chart-line" identifier='certifications'>Certificações</SidebarMenuItem>
          </SidebarContent>

          <SidebarFooter/>

        </Sidebar>
    </div>
  );
};

export default SidebarComponent;

