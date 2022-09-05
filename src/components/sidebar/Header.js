import React from 'react';
import profilepicture from '../../assets/images/profilepicture.jpeg';
import { CDBSidebarHeader } from 'cdbreact';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import '../../assets/css/Sidebar.css';

const Header = () => {
  return (

        <CDBSidebarHeader>
          <div id='header-profile-picture'>
            <img src= {profilepicture} alt='fotoperfil' className='profile-picture'/>
          </div>
          
          <div id='header-basic-info'>
            <h2 style={{ fontSize : "1.2vw"}}>
              Gustavo Mashiba
            </h2>

            <small>Brasileiro, 23 anos</small><br/>
          </div>

          <div id='header-social-icons'>
            <a rel="noreferrer" className='header-icons' target = "_blank" href = "https://linkedin.com/in/gustavo-sm">
              <FaLinkedinIn size='30px' color="#0072b1"/>
            </a>
            <a rel="noreferrer" className='header-icons' target = "_blank" href = "https://github.com/gus-sm">
              <FaGithub size='30px' color="#bd2c00"/>
            </a>
          </div>
        </CDBSidebarHeader>

  );
};

export default Header;

