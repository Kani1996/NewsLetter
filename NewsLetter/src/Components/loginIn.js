import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import './logIn.css';

const useStyles = makeStyles(({
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
}));

export default function LogIn() {
  const validate = values => {
    const errors = {};
    if (!values.userName) {
      errors.userName = 'Required';
    }
  
    if (!values.password) {
      errors.password = 'Required';
    }
    
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: ''
    },
    validate,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div> 
          <form className="width-100" onSubmit={formik.handleSubmit}>
              <div className={classes.child}>
                  <div className="child-container">
                      <TextField
                          id="userName"
                          name="userName"
                          type="text"
                          label="User Name"
                          className="textField"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.userName}
                      />
                      {formik.touched.userName && formik.errors.userName ? <div>{formik.errors.userName}</div> : null}
                  </div>
                  <div className="child-container">
                      <TextField
                          id="password"
                          name="password"
                          type="password"
                          label="Password"
                          className="textField"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                      />
                      {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
                  </div>
                  <div className="child-container">
                    <Button className="textField"  variant="outlined" color="primary" type="submit">Log In</Button>
                  </div>
              </div>
          </form>
        </div>
        <div className={classes.child}>
           <img className="image-style" src="/images/signupImage.jpg" alt="SignUp" />
        </div>
    </div>
  );
}