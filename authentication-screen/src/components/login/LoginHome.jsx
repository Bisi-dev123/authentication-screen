import "./Login.css";
import React from "react";
import { Link } from 'react-router-dom'

const LoginHome = () => {
  return (
    <div className="login-box">
      {/* ===========Title========== */}
      <div className="title-text">
        <h3>Welcome Back</h3>
      </div>

      {/* ===========email box============ */}
      <div className="email-wrapper">
        <label htmlFor="">Email</label>
        <div className="input-container">
          <input className="password-input" type="text" value="" placeholder="Enter email address"  id="email" />
        </div>
      </div>

      {/* ========password box============ */}
      <div className="email-wrapper">
        <label htmlFor="">Password</label>
        <div className="input-container">
          <input className="password-input" type="password" value="" placeholder="*********"  id="password" />
        </div>
      </div>

      <div className="remember-password">
        <div className="remember-me">
          <input  className="check-wrapper" type="checkbox" />
          <label  className="remember-wrapper" htmlFor="">Remember me</label>
        </div>
        <p className="forgotP-wrapper">Forgot password?</p>
      </div>

           {/* ======Login button====== */}
      <button id="login-button">Login</button>

      <div className="no-account">
        <p>Don't have an account?</p>
        <Link to="/signup" className="signUp-wrapper" >Sign up</Link>
      </div>
    </div>
  );
};

export default LoginHome;
