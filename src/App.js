
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import React,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './Pages/Contact';
import About from './Pages/About';




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
      <Navbar title="React App[Atul Singh]" mode={mode} enableMode ={togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
      <Routes>
        <Route path='/about' element={<About/>}/>
          
        
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
      
      </Routes>
        
      </div>
      </Router>
    </>
  );
}

export default App;
