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
const changeClearData=()=>{
    let clearText = '';
    setText(clearText);
}
    const [text,setText] = useState("") //hook of useState
  return (
    <>
    <div className="container mb-3">
    <h2>{props.heading}</h2>
  <textarea className="form-control" id="myBox" value={text} onChange={changeText} rows="3"></textarea>
  <button className='btn btn-primary my-5 mx-1' onClick={changeUpUpper}>Change to UpperCase</button>
  <button className='btn btn-primary my-5 mx-1' onClick={changeUpLower}>Change to LowerCase</button>
  <button className='btn btn-primary my-5 mx-1' onClick={changeClearData}>Clear</button>

</div>
<div className="container">
    <h2>Total Words & Character</h2>
    <p>{text.split('').length} Words & {text.length} Character</p>
    <p>{0.008 * text.split('').length} Mintues take to read the text</p>
    <h3>Preview</h3>
    <p>{text}</p>
</div>
</>
  );
}
