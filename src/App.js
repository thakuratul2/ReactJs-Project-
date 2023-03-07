
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import React,{useState} from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




function App() {
const [mode,setMode] = useState('light');
const [alert,setAlert] = useState(null);

function showAlert(message,type){
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}



function togglemode(){
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#5caee6';
    showAlert("Mode Enabled","success");
  }else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Mode Disabled","danger");
  }

}
  return (
    <>
    <Router>
      <Navbar title="React App[Atul Singh]" homeTitle="Home" contactTitle="Contact" mode={mode} enableMode ={togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
      <Routes>
        <Route path='/about' element={<About/>}/>
          
        
        <Route path='/home' element={<Home/>}/>
      
      </Routes>
        
      </div>
      </Router>
    </>
  );
}

export default App;
