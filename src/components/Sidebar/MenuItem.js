import React from 'react';
import { CDBSidebarMenuItem} from 'cdbreact';
import '../../assets/css/Sidebar.css'
const MenuItem = (props) => {
  return (
    <>
        <CDBSidebarMenuItem className= "sidebar-link" icon={props.icon}>{props.children}</CDBSidebarMenuItem>
    </>
  );
};

export default MenuItem;