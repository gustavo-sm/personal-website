import React, { useState } from 'react';
import CanvasDrawing from './contents/CanvasDrawing';
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
    <div style={{color:"#009dff", width: "100%", overflow: 'hidden', margin: "10px 0 0 10px", display:'flex'}}>
      
      {text ? 
        <>
          <h1>{text}</h1>
          <p onClick={handleCloseClick}> x </p> 
        </>

      : 
      <div>
        <h4>Olá, tudo bem com você? Sou o</h4>
        <h3>Gustavo Mashiba</h3>
        <h4>Bem-vindo ao meu website :)</h4>
      </div>}
      <CanvasDrawing/>

    </div>
  );
};

export default MainContent;