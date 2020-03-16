import React from 'react'; 
import './signUpLayout.css';
import SignUpForm from './signUpForm';

export default function SignUpLayout() {
    return (
        <div className="container">
            <div className="form-content">
                <SignUpForm />
            </div>
            <div className="image-content">
                <img className="image" src="/images/signupImage.jpg" alt="SignUp Image" />
            </div>   
        </div>
    );
}