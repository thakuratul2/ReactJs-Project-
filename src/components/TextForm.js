import React,{useState} from 'react';

export default function TextForm(props) {
    const changeUpUpper = ()=>{ //arrow function
     let newText = text.toUpperCase();
     setText(newText);
    }
    const changeText = (event)=>{
        setText(event.target.value);
    }
function changeUpLower(){
    let newText = text.toLowerCase();
    setText(newText);
}
    const [text,setText] = useState("Enter text here") //hook of useState
  return (
    <div className="mb-3">
    <h2>{props.heading}</h2>
  <textarea className="form-control" id="myBox" value={text} onChange={changeText} rows="3"></textarea>
  <button className='btn btn-primary my-5' onClick={changeUpUpper}>Change to UpperCase</button>
  <button className='btn btn-primary my-5' onClick={changeUpLower}>Change to UpperCase</button>
</div>

  );
}
