import React from 'react';
import './css/UnknownPage.css'; // Import the CSS file for styling

export default function UnknownPage() {
  return (
    <div className="unknown-page">
      <h1 className="unknown-title">404</h1>
      <h2 className="unknown-message">Page Not Found</h2>
      <p className="unknown-description">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <a href="/" className="unknown-link">Go Back to Home</a>
    </div>
  );
}
