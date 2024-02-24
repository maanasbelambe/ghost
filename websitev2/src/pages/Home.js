import React, {useEffect} from 'react'
import '../styles/Home.css';
import backgroundImage from '../assets/Ghost_Logo_v1.png'
import orangeImage from '../assets/GhostLogo_LandingImage.png'
import racing from '../assets/racing.jpg'
import mission from '../assets/missionimg.png'
import altair from '../assets/altairlogo.png'

function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let image_size = '40%'
  if (window.innerWidth <= 767) {
    image_size = '80%'
  }

  return (
    <div>
      <div className="home">
        <div className="landing" style={{backgroundImage: `url(${orangeImage})`,  backgroundSize: image_size}}>
          <h1> Electric Motorcycle Design and Racing </h1>
          <p>University of Illinois Urbana-Champaign</p>
        </div>
      </div>
      <div className="mission">
        <div className="mission-content">
          <div className="mission-text">
            <h2>Mission</h2>
            <p>GHOST Electric is a registered student organization (RSO) at The University of Illinois Urbana-Champaign, whose purpose is to design, construct, and race electric motorcycles while fitting within certain criteria given by the AHRMA Formula Lightning race organizers.</p>
          </div>
          <div className="mission-image">
            <img src={mission} alt="Mission Image"/>
          </div>
        </div>
      </div>
      <div className = "race">
        <div className="race-content">
          <div className="race-image">
            <img src={racing} alt="Race Image" />
          </div>
          <div className="race-text">
            <h2>The Race</h2>
            <p>The <a href="https://www.ahrma.org/" target="_blank">AHRMA</a> Formula Lightning series is the premier zero-emissions motorcycle road racing series in the US. Bikes may be powered by any means of propulsion that does not emit exhaust, such as electricity, magnetism, gravity, flywheels, springs, etc.</p>
          </div>
        </div>
      </div> 
      <div className = "sponsors"> 
        <div className="companies">
          <h2>Sponsors</h2>
            <a href="https://altair.com/" target="_blank">
              <img src={altair} alt="Altair Image" />
            </a>
        </div>
      </div>
    </div>
  );
}

export default Home;