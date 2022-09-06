import React, { useState } from 'react';
import manageSessionStorage from '../../helpers/manageSessionStorage';

const contentObj = {
  aboutme: 'aboutme',
  skills: 'skills',
  certifications: 'certifications',
  experience: 'experience'  
};

const MainContent = () => {
  const [text, setText] = useState('');
  const storageManager = manageSessionStorage();

  window.addEventListener('selectedChanged', () => {
    const selectedValue = storageManager.get('selected');
    setText(contentObj[selectedValue]);

  });

  function handleCloseClick(){
    storageManager.set('selected', '');
    window.dispatchEvent(new Event("selectedChanged"));
  }

  return (
    <div style={{color:"#009dff", width: "100%", margin: "10px 0 0 10px", display:'flex'}}>
      
      {text ? 
        <>
          <h1>{text}</h1>
          <p onClick={handleCloseClick}> x </p> 
        </>

      : <h1>Bem-vindos ao meu site!</h1>
      }
    </div>
  );
};

export default MainContent;