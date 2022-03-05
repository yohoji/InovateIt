
import './App.css';
import ResponsiveAppBar from './component/navbar'
import HomeContainer from './component/homeContainer'
import { Modal } from './component/Modal'
import {useState} from 'react'



function App() {
   


  return (
    <div className="App">
     
      <ResponsiveAppBar/>
       <HomeContainer/>
    </div>
  );
}

export default App;
