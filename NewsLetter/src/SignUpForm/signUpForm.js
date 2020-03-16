import React from 'react';
import { useFormik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './signUpForm.css';

export default function SignUpForm() { 
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const validate = values => {
        const errors = {};
        if (!values.firstName) {
          errors.firstName = 'Required';
        } else if (values.firstName.length > 15) {
          errors.firstName = 'Must be 15 characters or less';
        }
      
        if (!values.lastName) {
          errors.lastName = 'Required';
        } else if (values.lastName.length > 20) {
          errors.lastName = 'Must be 20 characters or less';
        }
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
      
        return errors;
      };
      const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
        },
        validate,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      return (
        <form onSubmit={formik.handleSubmit}>
            <div className="form-container">
                <div className="child-container">
                    <TextField
                        id="firstName"
                        name="firstName"
                        type="text"
                        label="First Name"
                        className="textField"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                </div>
                <div className="child-container">
                    <TextField
                        id="lastName"
                        name="lastName"
                        type="text"
                        label="Last Name"
                        className="textField"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                </div>
                <div className="child-container">
                    <TextField
                        id="email"
                        name="email"
                        type="email"
                        className="textField"
                        label="Email Address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </div>
                <div className="child-container">
                  <Button className="textField"  variant="outlined" color="primary" type="submit">Submit</Button>
                </div>
            </div>
        </form>
      );
}