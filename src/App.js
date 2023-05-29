import React, { useState } from "react";
import Alert from "./Alert";
import "./App.css";
// import About from "./componenet/About";
import Navbar from "./componenet/Navbar";

import Textarea from "./componenet/Textarea"
// import {
//   BrowserRouter as Router, 
//   Route,
//   Routes
// } from "react-router-dom";
 
function App() {
  const[mode, setMode] = useState("light")
  const[alert,setalert]= useState(null);

  const showalert=(message,type)=>{
    setalert({
      msg: message,
      type: type,
  });
   setTimeout(() => {
    setalert(null);
   }, 1500);

  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-primary');
  }
   
  const toggleMode=(cls)=>{
     removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode==='dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Lightmode has been enabled","success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = '#092246';
      showalert("Darkmode has been enabled","success");
    }
  }
 
  return (
    <>
      <Navbar title="Textutiles" mode = {mode} toggleMode={toggleMode}  />
      <Alert alert= {alert}/>
      <div className="container my-3">
        {/* <Router>
          <Routes> */}
            {/* <Route exact path="/about" element={<About mode = {mode}/>}/>  */}
            {/* <Route exact path="/" element={<Textarea heading = " Try TextUtils - Word Counter, Charactor Counter, Remove extra spaces etc." showalert={showalert} mode = {mode}/>}/>  */}
         {/* </Routes>
           
        </Router>  */}
        {<Textarea heading = " Try TextUtils - Word Counter, Charactor Counter, Remove extra spaces etc." showalert={showalert} mode = {mode}/>}
      </div>
       
    </>
  );
}

export default App;
