// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light'); // Whether dark is enabled or not
  const [modetext, setModeText] = useState("Enable Dark Mode")

  //Alert state
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      });
      setTimeout(()=>{
        setAlert(null);
      },1100);
  }

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      setModeText("Enable light mode");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been Enabled","success");
    }else{
      setMode('light');
      setModeText("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled","success");
    }
  }

  return (
    // <Router>
<>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} modeText={modetext}/>
    {/* <Navbar/> */}
    <Alert alert={alert}/>
    <div className='container my-3'>
         {/* { <Routes>
          <Route exact path="/about" element={<About/>}>
            {/* <About/> */}
          {/* </Route>  */}
          
          {/* <Route exact path="/" element={<TextForm heading="Enter the text to analyze Below" mode={mode} showAlert={showAlert}/>}> */}
            {/* <TextForm heading="Enter the text to analyze Below" mode={mode} showAlert={showAlert}/> */}
          {/* </Route> */}
        {/* </Routes> } */}
     <TextForm heading="Enter the text to analyze Below" mode={mode} showAlert={showAlert}/>
    </div>    
   
  {/* </Router> */}
  </>
  );
}

export default App;
