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
                <img className="image-style" src="/images/reviewImage.jpg" alt="SignUp" />
            </div>   
        </div>
    );
}