import React from 'react';
import './assets/css/App.css';
import SidebarComponent from './components/sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';

function App() {
  return (
    <div className='App'>
      <SidebarComponent/>
      <MainContent/>
    </div>
  );
}

export default App;
