import React from 'react';
import { Router } from "@reach/router";
import ToolBarCustom from './Components/toolBarCustom';
import SignUpLayout from './SignUpForm/signUpLayout';
import LogIn from './Components/loginIn';
import './App.css';

function App() {
  return (
    <div className="App">
       <ToolBarCustom />
         <Router>
           <SignUpLayout path='/' />
           <LogIn path="/login" />
        </Router>
    </div>
  );
}

export default App;
