
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [Mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)
const showAlert = (message,type) => {
  setalert({
    msg:message,
    type:type
  })

  setTimeout(() => {
    setalert(null)
  }, 2000);
}

  const toggleMode = () => {
    if (Mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("dark mode has been enabled" , "sucess")
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled ", "sucess")
    }
  }
  return (
    <>
   {/* <Router>*/}
<Navbar title="Textformatter" mode={Mode} toggleMode={toggleMode}  aboutText ="About"/>
<Alert alert={alert}/>

<div className="container my-3">
{/*<Routes>
          <Route path="/about">
            <About />
          </Route>
          
  <Route path="/">*/}
          {<TextForm showAlert={showAlert}heading="Enter your text to Analyze" mode={Mode}/>}
         {/* </Route>
        </Routes>*/}
        </div>
        



    
     </>
    
  );
}

export default App;
