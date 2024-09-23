import React, { useState, useContext } from 'react';
import {Link, useNavigate, Navigate} from 'react-router-dom'
import UserContext from '../context/UserContext';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import './css/Login.css'

export default function Login() {
  const notyf = new Notyf();

  const { user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  if(user.id){
    return <Navigate to='/'/>
  }

  function authenticate(e){

    e.preventDefault();

    fetch(`https://blogapi-santos.onrender.com/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.access !== undefined) {
        localStorage.setItem('token', data.access);
        retrieveUserDetails(data.access);
        setEmail('');
        setPassword('');
        notyf.success('Successful Login');
      } else {
        notyf.error('Login failed');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      notyf.error('Failed to login. Please try again.');
    });
    
  }

  function retrieveUserDetails(token){
    fetch(`https://blogapi-santos.onrender.com/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(data => {
      setUser({
        id: data.user._id,
        isAdmin: data.user.isAdmin
      })
    })
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={(e) => authenticate(e)}>
        <h2>Login to Your Account</h2>
        
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="name@example.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <button 
          type="submit" 
          className="login-btn"
        >Login
        </button>
        
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
      </form>
    </div>
  );
}
