
import './App.css';
import ResponsiveAppBar from './component/navbar'
import HomeContainer from './component/homeContainer'
import { Routes,Route } from 'react-router-dom'
import Courses from './component/Courses'
import Contact from './component/Contact'



function App() {
   


  return (
    <div className="App">
     
      <ResponsiveAppBar/>
      <Routes>
        <Route path='/Acceuil' element={<HomeContainer/>} />
        <Route path='/cours' element={ <Courses /> } />
        <Route path='/Contact' element={ <Contact />} />
      </Routes>

    </div>
  );
}

export default App;
