import React from 'react';
import { CDBSidebarMenuItem} from 'cdbreact';
import '../../assets/css/Sidebar.css'
import manageSessionStorage from '../../helpers/manageSessionStorage';

const SidebarMenuItem = (props) => {

  function handleClick(){
    manageSessionStorage().set('selected', props.identifier);
    window.dispatchEvent(new Event("selectedChanged"));
  }

  return (
    <>
        <CDBSidebarMenuItem onClick = {handleClick} className= "sidebar-link" icon={props.icon}>
          {props.children}
        </CDBSidebarMenuItem>
    </>
  );
};

export default SidebarMenuItem;