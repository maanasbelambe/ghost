import React from 'react';
import '../styles/Support.css';
import Hero from '../assets/BikeWebPic3.jpg'
import Levels from '../assets/SponsorLevels.png'

const Support = () => {
  return (
    <div className="support-us">
      <header className="hero">
        <img src={Hero} alt="Support Us" />
        <div className="hero-text">
          <h1>Support Us</h1>
        </div>
      </header>
      
      <div className="cards">
        <a href="https://www.gofundme.com" className="card">GoFundMe</a>
        <a href="https://www.paypal.com" className="card">PayPal</a>
        <a href="https://www.venmo.com" className="card">Venmo</a>
      </div>

      <div className="image-text">
        <img src={Levels} alt="Side Image" />
        <p>We will promote your company based on the level of sponsorship provided, including (but not limited to) adding your logo to our motorcycle and website, and recognizing your contributions on our growing social media pages.</p>
      </div>
      
    </div>
  );
};

export default Support;
