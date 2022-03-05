
import './App.css';
import ResponsiveAppBar from './component/navbar'
import HomeContainer from './component/homeContainer'
import { Modal } from './component/Modal'
import {useState} from 'react'
import {Routes,Route} from 'react-router-dom'



function App() {
   


  return (
    <div className="App">
     
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/' exact>

        </Route>

        <Route path='/courses' >
            
        </Route>

        <Route path='/contact' >
            
        </Route>
      </Routes>
       <HomeContainer/>
    </div>
  );
}

export default App;
