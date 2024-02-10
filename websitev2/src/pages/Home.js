import React, {useEffect} from 'react'
import '../styles/Home.css';
import backgroundImage from '../assets/Ghost_Logo_v1.png'

function Home() {

  return (
    <div>
      <div className="home">
        <div className="landing" style={{backgroundImage: `url(${backgroundImage})`}}>
          <h1> Electric Motorcycle Design and Racing </h1>
          <p>at the University of Illinois Urbana-Champaign</p>
        </div>
      </div>
      <div className="mission">
        <div className="mission-content">
            <div className="mission-text">
            <h2>Mission</h2>
            <p>GHOST Electric is a registered student organization (RSO) at The University of Illinois Urbana-Champaign, whose purpose is to design, construct, and race electric motorcycles while fitting within certain criteria given by the AHRMA Formula Lightning race organizers.</p>
            </div>
            <div className="mission-image">
            <img src="mission-image.jpg" alt="Mission Image" />
            </div>
        </div>
      </div>
      <div className = "race">
        <div className="race-content">
                <div className="race-image">
                    <img src="race-image.jpg" alt="Race Image" />
                </div>
                <div className="race-text">
                    <h2>The Race</h2>
                    <p>The AHRMA Formula Lightning series is the premier zero-emissions motorcycle road racing series in the US. Bikes may be powered by any means of propulsion that does not emit exhaust, such as electricity, magnetism, gravity, flywheels, springs, etc.</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;