import React ,{Component} from 'react';
import { Router } from "@reach/router";
import ToolBarCustom from './Components/toolBarCustom';
import SignUpLayout from './SignUpForm/signUpLayout';
import LogIn from './Components/loginIn';
import './App.css';
import NavBar from './Components/MainLayout/NavBar';

class App extends Component {
  state = {
      isLoggedIn: false
    };
  handleLogIn = (validation) =>{
     console.log('this.state.login:::', validation);
     this.setState({isLoggedIn : validation})
  }; 
  render() {
    return (
      <div>
        {this.state.isLoggedIn ? (
          <div className="App">
             <NavBar />
          </div>
        ) : (
          <div className="App">
              <ToolBarCustom />
              <Router>
                <SignUpLayout path='/' />
                <LogIn  handleLogInClick={this.handleLogIn} path="/login" />
              </Router>
           </div>
        )}
      </div>
    );
  }
}

export default App;
