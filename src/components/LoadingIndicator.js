import React from 'react';
import './css/LoadingIndicator.css'; // Import the CSS for styling

export default function LoadingIndicator() {
  return (
    <div className="loading-indicator">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
}
