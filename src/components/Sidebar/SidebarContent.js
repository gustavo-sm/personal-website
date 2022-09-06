import React from 'react';
import { CDBSidebarContent, CDBSidebarMenu} from 'cdbreact';

const SidebarContent = (props) => {
  return (
    <CDBSidebarContent>
        <CDBSidebarMenu>
            {props.children}
        </CDBSidebarMenu>

    </CDBSidebarContent>
  );
};

export default SidebarContent;

