import React from 'react';
import { CDBSidebarContent, CDBSidebarMenu} from 'cdbreact';

const Content = (props) => {
  return (
    <CDBSidebarContent>
        <CDBSidebarMenu>
            {props.children}
        </CDBSidebarMenu>

    </CDBSidebarContent>
  );
};

export default Content;

