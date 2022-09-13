import React, { useState } from 'react';
//import CanvasDrawing from './contents/CanvasDrawing';
import Welcome from './contents/Welcome';
import '../../assets/css/MainContent.css'
import manageSessionStorage from '../../helpers/manageSessionStorage';

const contentObj = {
  bio: 'aboutme',
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
    <div id='MainContent-wrapper'>
      {textContent ? 
        <div>
          <div className='MainContent-title'>
            <h1>{textContent}</h1>
            <p onClick={handleClick}>x</p>
          </div>

          <p style={{fontSize: "20px"}}>
            Bacharel em Ciência da Computação pela Universidade Presbiteriana Mackenzie, cursando pós-gradução em DevOps Engineering, atuando principalmente com desenvolvimento de melhorias de serviços baseados em SaaS, PaaS e IaaS, manutenção, extensão/integração de soluções Oracle CX/CRM e desenvolvimento Web. <br/>

            Atualmente estou buscando aprimorar conhecimentos em metodologias e boas práticas em automação, Engenharia de software e processos DevOps.<br/>

            GitHub: https://github.com/gustavo-sm <br/>

            AWS Certified Developer
          </p>
        </div>
      :
      <Welcome mode={welcomeMode}/>
    }

    </div>
  );
};

export default MainContent;