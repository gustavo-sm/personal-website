import React, { useState } from 'react';
//import CanvasDrawing from './contents/CanvasDrawing';
import Welcome from './contents/Welcome';

import manageSessionStorage from '../../helpers/manageSessionStorage';

const contentObj = {
  aboutme: 'aboutme',
  skills: 'skills',
  certifications: 'certifications',
  experience: 'experience'  
};


const MainContent = () => {
  const [textContent, setTextContent] = useState('');
  const [welcomeMode, setWelcomeMode] = useState('initial');
  const storageManager = manageSessionStorage();

  window.addEventListener('selectedChanged', () => {
    const selectedValue = storageManager.get('selected');
    setTextContent(contentObj[selectedValue]);
  });

  window.addEventListener('continueClicked', () => {
    setWelcomeMode('alt_txt');
  });

  function handleClick(){
    setTextContent('');
  }

  return (
    <div style={{color:"#009dff", width: "100%", overflow: 'hidden', margin: "10px 0 0 10px", display:'flex'}}>
      {textContent ? 
        <div >
          <div style={{display:"flex"}}>
            <h1>{textContent}</h1>
            <p onClick={handleClick} style={{cursor:"pointer"}}>x</p>
          </div>
          <p style={{fontSize: "20px"}}>blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</p>
        </div>
      :
      <Welcome mode={welcomeMode}/>
    }

    </div>
  );
};

export default MainContent;