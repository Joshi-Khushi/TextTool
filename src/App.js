import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("success", "Dark Mode has been enabled.");
      document.title = 'TextTool - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("success", "Light Mode has been enabled.");
      document.title = 'TextTool - Light Mode';
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextTool" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
    <Routes>
      {/* 'exact' keyword is to be used to do complete matching, otherwise React does only partial matching */}
          <Route exact path="/about" element={<About mode={mode} />}>
          </Route>

          <Route exact path="/" element={<TextForm heading="TextTool - Enter the text you want to transform" mode={mode} showAlert={showAlert} />}>
          </Route>
    </Routes>
    </div>
    </Router> 
    </>
  );
}

export default App;
