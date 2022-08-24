import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
       
       let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("converted to Upper Case" , "sucess")
    }
    const handleLowClick = () =>{
       
        let newText= text.toLowerCase();
         setText(newText);
         props.showAlert("converted to lower Case" , "sucess")
     }
    const handleOnChange = (event) =>{
       
        setText(event.target.value)
    }
    const handleCopy = () => {
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text Copied" , "sucess")
    }
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Remove Extra Spaces" , "sucess")
    }
    const[text,setText] = useState('Enter text here');

  return (
    <>
    <div className = "container" style ={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor :props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="10"></textarea>
    
  </div>
 
 <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to uppercase</button>
 <button className="btn btn-primary mx-2 my-1"onClick={handleLowClick}>Convert to lowercase</button>
 <button className="btn btn-primary mx-2 my-1"onClick={handleCopy}>Copy Text</button>
 <button className="btn btn-primary mx-2 my-1"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
 </div>
 <div className="container my-4" style ={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p> {0.008 * text.split(" ").length} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
 </div>
</>
  )
}
