// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import { BrowserRouter as Router, Route,Link, Routes } from 'react-router-dom'

function App() {
  const [mode, setmode] = useState('light')
  const togglemode=()=>{
    if(mode==="light"){
      document.body.style.backgroundColor="#212529f0"; //
      // document.body.style.color="white";
      showalert("Dark Mode is On","success");
      setmode("dark");
    }
    else{
        document.body.style.backgroundColor="white";
      // document.body.style.color="black";
      showalert("Light Mode is On","success");
      setmode("light");

    }
  }
  const [alert, setalert] = useState(null);
  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
    
  return (
    <div>
      <Router>
          <Navbar title="TextUtils" homesec="Home" aboutsec="About Us" mode={mode} togglemode={togglemode}/>
          <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About/>}>
            </Route>
            <Route exact path="/" element={<TextForm showalert={showalert} mode={mode} heading="Enter the Text to analyze"/>}>
            </Route>
          </Routes>
        </div>
        </Router>
    
    </div>
  );
}

export default App;
