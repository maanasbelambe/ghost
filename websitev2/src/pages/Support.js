import React from 'react';
import '../styles/Support.css';
import Hero from '../assets/BikeWebPic3.jpg'
import Levels from '../assets/SponsorLevels.png'
import gofundmeQR from '../assets/gfmQR.jpg'
import gfmBrand from '../assets/gofundme.png'
import venmoQR from '../assets/venmoQR.png'
import venmoLogo from '../assets/Venmo-Logo.png'
import paypalQR from '../assets/paypalQR.png'
import paypalLogo from '../assets/paypalLogo.jpg'
import sponsorPacket from '../assets/ghost_sponsorship_packet.pdf'
const Support = () => {
  return (
    <div className="support-us">
      <header className="hero">
        <img src={Hero} alt="Support Us" />
        <div className="hero-text">
          <h1>Support Us</h1>
        </div>
      </header>
      
     

      <div className="image-text">
        <img src={Levels} alt="Side Image" className="levelsImg"/>
        <p>By sponsoring UIUC Ghost Electric, 
          your organization will gain valuable visibility and 
          recognition based on your chosen sponsorship tier. 
          Each tier offers unique benefits, including logo placement 
          and promotional opportunities across various platforms. 
          Sponsors can enjoy exposure on our electric race bike, website, 
          social media, and team apparel. These sponsorships not only support 
          our mission but also provide an excellent opportunity to showcase your 
          brand to a diverse audience of students, professionals, and motorsport enthusiasts. </p>
      </div>
      
    <div className="sponsor-pdf">

    <a href={sponsorPacket} download>Download Sponsorship Brochure</a>

    <iframe src={sponsorPacket} width="50%" height="600px" className="pdfContainer"></iframe>

   

    </div>

    <div className="cardsSup">
        <div className='card-one'>
        <a>
          <img src={gfmBrand} className="gfm-brand" ></img>
        </a>
        <a href="https://www.gofundme.com/f/help-ghost-electric-hit-the-track" className="cardSup">Donate</a>
        <br />
        {/* <br /> */}

        <a href="https://www.gofundme.com/f/help-ghost-electric-hit-the-track" >
        <img src={gofundmeQR} className='gfm-qr'></img>
        </a>
        </div>
        {/* <a href="https://www.paypal.com" className="card">PayPal</a> */}
        <div className="card-two">
        <a>
          <img src={paypalLogo} className="venmo-brand"></img>
        </a>
        <a href="https://www.paypal.com/us/home?kid=p75883314412&gad_source=1&gclid=CjwKCAiA65m7BhAwEiwAAgu4JKtwV9MwJmSsXeSKkRE9Km6QAtNGRLH7pcw9WvrzH6i-_9lFMXWkABoCIZcQAvD_BwE&gclsrc=aw.ds" className="cardSup">Support Us</a>
        <a>
        <p>Username:</p>
        <p>@Ghost Electric Motorcycles</p>

          <img src={paypalQR} className="venmo-qr"></img>
        </a>


        </div>
        <div className="card-two">
        <a>
          <img src={venmoLogo} className="venmo-brand"></img>
        </a>
        <a href="https://www.venmo.com" className="cardSup">Venmo Us</a>
        <a>
        <p>Username:</p>
        <p>@ghost_uiuc</p>

          <img src={venmoQR} className="venmo-qr"></img>
        </a>


        </div>
      </div>

    </div>
  );
};

export default Support;
