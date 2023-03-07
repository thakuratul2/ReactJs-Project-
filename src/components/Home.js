import React, { useState } from 'react';
import Alert from './Alert';
import TextForm from './TextForm';

function Home() {
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
  return (
    <>
    <div>
    <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter the text"/>
    </div>
    </>
  );
}

export default Home;
