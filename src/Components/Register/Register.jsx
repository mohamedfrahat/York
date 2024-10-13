import React, { useState } from 'react';
import './Register.css';
import logo from '../../Images/0001078_YORK Logo.png';

const Register = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="register">
      <div className="form-container">
        <div className="form-header">
          <img src={logo} alt="logo" className='logo' />
          <h1 className='title mt-2'>Hala! Let's get started</h1>
        </div>
        <div className="toggle-buttons">
          <button className={!isSignUp ? "active" : ""} onClick={() => setIsSignUp(false)}>Log in</button>
          <button className={isSignUp ? "active" : ""} onClick={() => setIsSignUp(true)}>Sign up</button>
        </div>
        <form>
          {isSignUp ? (
            <>
              <input type="text" placeholder="Enter Your Name" />
              <input type="tel" placeholder="Enter Phone Number" />
              <input type="password" placeholder="Password" />
              <button type="submit">Sign Up</button>
            </>
          ) : (
            <>
              <input type="tel" placeholder="Enter your phone number" />
              <input type="password" placeholder="Password" />
              <a href="#" className="forgot-password">Forgot your password?</a>
              <button type="submit">Log In</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
