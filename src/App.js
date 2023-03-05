
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';



function App() {
const [mode,setMode] = useState('light');

function togglemode(){
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor = '#5caee6';
  }else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
  }

}
  return (
    <>
      <Navbar title="React App[Atul Singh]" homeTitle="Home" contactTitle="Contact" mode={mode} enableMode ={togglemode}/>
      <div className="container my-5">
        <TextForm  heading="Enter the text"/>
      </div>
    </>
  );
}

export default App;
