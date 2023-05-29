import React ,{useState} from "react";

export default function Textarea(props) {
  const handleUpclick=()=>{
    // console.log("uppercase was clicked");
    let newText = Text.toUpperCase();
    setText (newText);
    props.showalert("converted to Uppercase!","success");
  }
  const handleLoclick=()=>{
    // console.log("uppercase was clicked");
    let newText = Text.toLowerCase();
    setText (newText);
    props.showalert("converted to Lowercase!","success");

  }
  const handleClear=()=>{
   let newText = "";
    setText (newText);
    props.showalert("Text cleared!","success");
  }

  const handlecopy=()=>{
    navigator.clipboard.writeText(Text);
    props.showalert("Copy to clipboard!","success");

  }
  const handleCpyText=()=>{
    let cpytext=Text;
    setText("");

   
  }

  const handleExtraspaces=()=>{
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showalert("Extra spaces are removed","success");
  }

  const handleOnchange=(event)=>{
    // console.log("onchange");
    setText(event.target.value);
  }
  
  const[Text,setText] = useState("");
  // setText ("new text");
  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
      <h2 className="mb-3">{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" value= {Text} onChange={handleOnchange} style={{backgroundColor: props.mode==='light'?'white':'#2a3f83',color: props.mode==='light'?'black':'white'}} id="form-box" rows="12"></textarea>
      </div>
       <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>convert to Uppercase</button>
       <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>convert to Lowercase</button>
       <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>clear Text</button>
       <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy}>copy Text</button>
       <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraspaces}>Remove Extra Spaces</button>
       <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCpyText}>copy text here</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}} >
      <h2>Your text summery</h2>
      <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} charactors</p>
      <p>{0.008*Text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read</p>
      <h2>Preview</h2>
      <p>{Text.length>0?Text:"Nothing to preview here!"}</p>
    </div>
    </>
  );
}
