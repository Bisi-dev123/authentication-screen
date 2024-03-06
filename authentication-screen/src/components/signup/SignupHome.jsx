import './Signup.css'
import React from "react";
import { Link } from 'react-router-dom'

const SignupHome = () => {
    return (
      <div className='signup-box'>
        {/* ===========Title========== */}
        <div className='title-text'>
           <h3>Create an account</h3>
        </div>

         {/* ===========username box============ */}
        <div className="username-wrapper">
          <label htmlFor="">Username</label>
          <div className='input-container'>
            <input className='password-input' type="text" value="" placeholder="Enter username" id='username' />
          </div>
        </div>

         {/* ===========email box============ */}
        <div className="username-wrapper">
          <label htmlFor="">Email</label>
          <div className='input-container'>
            <input className='password-input' type="text" value="" placeholder="Enter email address" id='email' />
          </div>
        </div>

            {/* ===========password box============ */}
        <div className="username-wrapper">
          <label htmlFor="">Password</label>
          <div className='input-container'>
            <input
              className="password-input"
              type="password"
              value=""
              placeholder="*********" id='password'
            />
          </div>
        </div>
          
        <div className="username-wrapper">
          <label htmlFor="">Confirm Password</label>
          <div className='input-container'>
            <input
              className="password-input"
              type="password"
              value=""
              placeholder="*********" id='confirm-password'
            />
          </div>
        </div>
          {/* ===========signup button============ */}
        <button id='create-button' >Create Account</button>

        <p>Or</p>

           {/* ===========google/apple-box============ */}
        <div className="google-apple-wrapper">
            <div className="google-wrapper">
                <img src="src/assets/google_icon.svg" alt='google icon' width={16} height={16} />
                <p>Sign up with Apple</p>
            </div>
            <div className="apple-wrapper">
                <img src="src/assets/Apple_Icon.svg" alt='google icon' width={24} height={24} />
                <p>Sign up with Apple</p>
            </div>
        </div>
  
        <div className='have-account'>
          <p>Already have an account?</p>
          <Link to="/login" className="login-wrapper" >Login</Link>
        </div>
      </div>
  
    
    );
  };
  
  export default SignupHome;
  