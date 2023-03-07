
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';



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
      <Navbar title="React App[Atul Singh]" homeTitle="Home" contactTitle="Contact" mode={mode} enableMode ={togglemode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <TextForm showAlert={showAlert} heading="Enter the text"/>
      </div>
    </>
  );
}

export default App;
