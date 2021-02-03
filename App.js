import React from 'react';
import './App.css';
import Profilphoto from './components/profilphoto';
import Fullname from './components/fullname';
import Address from './components/address';


function App() {
  return (
    <div className="App">
      <Profilphoto/>
      <Fullname/>
      <Address/>

    </div>
  );
}

export default App;
