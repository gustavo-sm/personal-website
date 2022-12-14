import React from 'react';
import profilepicture from '../../assets/images/profilepicture.jpeg';
import { CDBSidebarHeader } from 'cdbreact';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import '../../assets/css/Sidebar.css';

const SidebarHeader = () => {
  return (
        <CDBSidebarHeader id="sidebar-header">
          <div id='header-profile-picture'>
            <img src= {profilepicture} alt='fotoperfil' className='profile-picture'/>
          </div>
          
          <div id='header-basic-info'>
            <h2 style={{ fontSize : "1.1vw"}}>
              Gustavo Mashiba
            </h2>
            <small style={{color:'yellow'}}>Node.js developer</small>
          </div>

          <div id='header-social-icons'>
            <a rel="noreferrer" className='header-icons' target = "_blank" href = "https://linkedin.com/in/gustavo-sm">
              <FaLinkedinIn size='30px' color="#0072b1"/>
            </a>
            <a rel="noreferrer" className='header-icons' target = "_blank" href = "https://github.com/gustavo-sm">
              <FaGithub size='30px' color="#bd2c00"/>
            </a>
          </div>
        </CDBSidebarHeader>

  );
};

export default SidebarHeader;

