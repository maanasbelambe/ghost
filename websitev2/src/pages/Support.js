import React from 'react';
import '../styles/Support.css';

const Support = () => {
  return (
    <div className="support-us">
      <header className="hero">
        <img src="your-image-path.jpg" alt="Support Us" />
        <h1>Support Us</h1>
      </header>
      
      <div className="cards">
        <a href="https://www.gofundme.com" className="card">GoFundMe</a>
        <a href="https://www.paypal.com" className="card">PayPal</a>
        <a href="https://www.venmo.com" className="card">Venmo</a>
      </div>

      <div className="image-text">
        <img src="your-side-image.jpg" alt="Side Image" />
        <p>Your supporting text goes here.</p>
      </div>

      <div className="pdf-container">
        <embed src="your-file-path.pdf" type="application/pdf" width="100%" height="600px" />
      </div>
    </div>
  );
};

export default Support;
