import React, { useState } from 'react';
//import CanvasDrawing from './contents/CanvasDrawing';
import Button from 'react-bootstrap/Button';
import manageSessionStorage from '../../helpers/manageSessionStorage';

const contentObj = {
  aboutme: 'aboutme',
  skills: 'skills',
  certifications: 'certifications',
  experience: 'experience'  
};

const MainContent = () => {
  const [text, setText] = useState('');
  const [tstClass, setTstClass] = useState('slideText-normal');
  const storageManager = manageSessionStorage();

  window.addEventListener('selectedChanged', () => {
    const selectedValue = storageManager.get('selected');
    setText(contentObj[selectedValue]);
  });

  function handleClick(){
    window.dispatchEvent(new Event("continueClicked"));
    setTstClass('slideText');
  }

  return (
    <div style={{color:"#009dff", width: "100%", overflow: 'hidden', margin: "10px 0 0 10px", display:'flex'}}>
      {text ? 
        <>
          <h1>{text}</h1>
        </>
      : 
      <div className = {tstClass} style={{zIndex:1, marginTop: '25vh'}}>
        <h4 style={{fontSize: '72px'}}>Olá, tudo bem com você?</h4>
        <h3 style={{fontSize: '96px'}}>Me chamo Gustavo</h3>
        <h4 style={{fontSize: '72px'}}>Bem-vindo ao meu website :)</h4>
        <Button size='lg' onClick={handleClick}>Ok</Button>
      </div>}
      {/*<CanvasDrawing/>*/}

    </div>
  );
};

export default MainContent;