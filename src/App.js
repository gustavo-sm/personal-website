import React, {useEffect} from 'react';
import './assets/css/App.css';
import SidebarComponent from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import manageSessionStorage from './helpers/manageSessionStorage';

function App() {
  
  useEffect(()=>{
    manageSessionStorage().destroy();
  },[]);

  return (
    <div className='App'>
      <SidebarComponent/>
      <MainContent/>
    </div>
  );
}

export default App;
