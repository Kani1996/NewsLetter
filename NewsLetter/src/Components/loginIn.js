import React, {Component} from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './logIn.css';

const styles = theme =>({
    root: {
      flexGrow: 1,
      flexDirection: "row",
      display: "flex"
    },
    child :{
      width: "50vw",
      alignItems: "start",
      justifyContent: "space-around",
      margin:"24px",
      display: "flex",
      flexDirection: "column",
    }
});


class LogIn extends Component{
  state = {
    userName: '',
    password: ''
  };

  handleChange = changedValue => event => {
    this.setState({ [changedValue]: event.target.value });
  };
  sendData = () =>{
    this.props.handleLogInClick(true);
  }
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
          <div> 
            <form className="width-100">
                <div className={classes.child}>
                    <div className="child-container">
                        <TextField
                            id="userName"
                            name="userName"
                            type="text"
                            label="User Name"
                            className="textField"
                            onChange={this.handleChange('userName')}
                            value={this.state.userName}
                        />
                    </div>
                    <div className="child-container">
                        <TextField
                            id="password"
                            name="password"
                            type="password"
                            label="Password"
                            className="textField"
                            onChange={this.handleChange('password')}
                            value={this.state.password}
                        />
                    </div>
                    <div className="child-container">
                      <Button className="textField" onClick={this.sendData} variant="outlined" color="primary">Log In</Button>
                    </div>
                </div>
            </form>
          </div>
          <div className={classes.child}>
             <img className="image-style" src="/images/reviewImage.jpg" alt="SignUp" />
          </div>
      </div>
    );
  }
 
}
export default withStyles(styles)(LogIn);
