import React, { useState } from "react";

export default function TextForm(props) {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtn] = useState("Enable Dark Mode");
  const changeUpUpper = () => {
    //arrow function
    let newText = text.toUpperCase();
    setText(newText);
  };
  const changeText = (event) => {
    setText(event.target.value);
  };
  function changeUpLower() {
    let newText = text.toLowerCase();
    setText(newText);
  }
   const removeSpace = ()=>{
    let removeText = text.split(/[ ]+/);
    setText(removeText.join(" "));
   }
  const changeMode = () => {
    if (myStyle.color === "black" && myStyle.backgroundColor === "white") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
      });
      setBtn("Enable Light Mode");
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtn("Enable Dark Mode");
    }
  };
  const changeClearData = () => {
    let clearText = "";
    setText(clearText);
  };

  const [text, setText] = useState(""); //hook of useState
  return (
    <>
      <div className="container mb-3" style={myStyle}>
        <h2>{props.heading}</h2>
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          style={myStyle}
          onChange={changeText}
          rows="3"
        ></textarea>
        <button
          className="btn btn-primary my-5 mx-1"
          onClick={changeUpUpper}
          style={myStyle}
        >
          Change to UpperCase
        </button>
        <button
          className="btn btn-primary my-5 mx-1"
          onClick={changeUpLower}
          style={myStyle}
        >
          Change to LowerCase
        </button>
        <button
          className="btn btn-primary my-5 mx-1"
          onClick={removeSpace}
          style={myStyle}
        >
          Remove Spaces
        </button>
        <button
          className="btn btn-primary my-5 mx-1"
          onClick={changeMode}
          style={myStyle}
        >
          {btnText}
        </button>
        <button
          className="btn btn-primary my-5 mx-1"
          onClick={changeClearData}
          style={myStyle}
        >
          Clear
        </button>
      </div>
      <div className="container" style={myStyle}>
        <h2>Total Words & Character</h2>
        <p>
          {text.split("").length} Words & {text.length} Character
        </p>
        <p>{0.008 * text.split("").length} Mintues take to read the text</p>
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}
