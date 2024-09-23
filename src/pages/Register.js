import React, { useState } from 'react';
import './css/Register.css'

export default function Register() {

  return (
    <div className="register-container">
      <form className="register-form">
        <h2>Create an Account</h2>
        
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            
          />
        </div>
        
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            
          />
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            
          />
        </div>
        
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            
          />
        </div>
        
        <button type="submit" className="register-btn">Register</button>
        
        <div className="login-link">
          Already have an account? <a href="#">Login here</a>
        </div>
      </form>
    </div>
  );
}
