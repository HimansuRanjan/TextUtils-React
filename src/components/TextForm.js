import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case!","success");
    }

    const handleLowClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case!","success");

    }

    const handelCopy = ()=>{
        let word = document.getElementById("myBox");
        word.select();
        word.setSelectionRange(0,9999);
        navigator.clipboard.writeText(word.value);
        props.showAlert("Text copied!","success");

    }

    // listening to events 
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }

    const handleClr = (event)=>{
        setText("");
        props.showAlert("Text cleared!","success");

    }

    const handelExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed all extraspaces!","success");

    }

    const character = (word)=>{
        let words = word.split(" ");
        let len = 0;
        words.forEach(element => {
            len = len + element.length;
        });
        return len;
    }
    // const capitalize = (event)=>{
    //     let words = "";
    //     text.split(" ").forEach(element => {
    //         words = " " + element[0].toUpperCase() + element.substring(1);
    //     });
    //     console.log(words);
    //     setText(words);
    // }

    // state 
    const [text, setText] = useState("");

  return (
      <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to upper case</button>
        <button className='btn btn-primary mx-2' onClick={handleLowClick}>Convert to Lower case</button>
        <button className='btn btn-primary mx-2' onClick={handleClr}>Clear text</button>
        <button className='btn btn-primary mx-2' onClick={handelCopy}>Copy text</button>
        <button className='btn btn-primary mx-2' onClick={handelExtraSpaces}>Remove extra spaces</button>

    </div>
    <div className='container my-4' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length - 1} words and {character(text)} characters</p>
        <p>{0.008 * (text.split(" ").length-1)} Minutes required to read!!</p>
        <h3>Priview</h3>
        <p>{text.length>0?text:"Enter your text to preview here:"}</p>
    </div>
    </>
  )
}
