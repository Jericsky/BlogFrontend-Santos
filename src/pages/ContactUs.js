import React, { useState } from 'react';
import './css/ContactUs.css'

export default function ContactUs() {
  

  return (
    <div className="contact-container" id='contact'>
      <form className="contact-form">
        <h2>Contact Us</h2>
        
        <div className="form-group">
          <label>Name</label>
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
          <label>Message</label>
          <textarea/>
        </div>
        
        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </div>
  );
}
