import React, { useState } from 'react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // Notyf CSS for notifications
import './css/Register.css';

// Initialize Notyf instance
const notyf = new Notyf();

export default function Register() {
  // State to capture form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      notyf.error('Passwords do not match');
      return;
    }

    try {
      // Make the API call to register the user
      const response = await fetch('https://blogapi-santos.onrender.com/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data) {
        // Display success notification
        notyf.success('Account created successfully!');
        // Clear form fields
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else if (data.error) {
        // Display error notification with message from the API
        notyf.error(data.error || 'Registration failed');
      }
    } catch (err) {
      notyf.error('An error occurred during registration');
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>
        
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
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
