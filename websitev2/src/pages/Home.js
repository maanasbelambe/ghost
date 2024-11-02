import React, {useEffect} from 'react'
import '../styles/Home.css'
//import backgroundImage from '../assets/Ghost_Logo_v1.png'
//import orangeImage from '../assets/GhostLogo_LandingImage.png'
import TheRace from '../assets/TheRace_Image.jpg'
import mission from '../assets/Mission_Image.jpeg'
import altair from '../assets/altairlogo.png'
//import warinc from '../assets/warinc_logo.png'
import ACC from '../assets/ACCLogo.png'
import redbull from '../assets/redbull.png'
import SSC from '../assets/IGF.png'
import PLA from '../assets/PLAconsulting.png'
//import frame from '../assets/frame.png'
//import framefound from '../assets/framfound.jpeg'
import RBM from '../assets/rbm_logo.png'
import KTinc from '../assets/KTinc.png'
import Wagner from '../assets/WagnerMachine.png'
import InData from '../assets/InDataConsulting.png'


function Home() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //let image_size = '40%'
  //if (window.innerWidth <= 767) {
  //  image_size = '80%'
  //}

  return (
    <div>
      <div className="home">
        <div className="background"></div>
        <div className="landing">
          <h1> Electric Motorcycle Design and Racing </h1>
          <p>University of Illinois Urbana-Champaign</p>
        </div>
      </div>
      <div className="mission">
        <div className="mission-content">
          <div className="mission-text">
            <h2>Mission</h2>
            <p>GHOST Electric is a registered student organization (RSO) at The University of Illinois Urbana-Champaign, whose purpose is to design, construct, and race electric motorcycles while fitting within certain criteria given by the MotoStudent race organizers.</p>
          </div>
          <div className="mission-image">
            <img src={mission} alt="MissionImage"/>
          </div>
        </div>
      </div>
      <div className = "race">
        <div className="race-content">
          <div className="race-image">
            <img src={TheRace} alt="RaceImage" />
          </div>
          <div className="race-text">
            <h2>The Race</h2>
            <p>Ghost is participating in <a href="https://www.motostudent.com/" target="_blank" rel="noreferrer">MotoStudent's</a> electric category, where teams from universities worldwide race their custom-built electric motorcycles, applying engineering skills in a competitive setting.</p>
          </div>
        </div>
      </div> 
      <div className = "sponsors"> 
        <div className="companies">
          <h2>Sponsors</h2>
            <a className="ACC" href="https://www.rightbalancemotorsports.com/" target="_blank" rel="noreferrer">
              <img src={RBM} width={375} height={125} alt="Right Balance Motorsports" />
            </a>
            <a className="ACC" href="https://studentengagement.illinois.edu/student-sustainability/ssc/" target="_blank" rel="noreferrer">
              <img src={SSC}  width={300} height={125} alt="SSC" />
            </a>
            <a className="ACC" href="https://www.linkedin.com/in/pla-accounting-services-llc-0972882b9/" target="_blank" rel="noreferrer">
              <img src={PLA}  width={300} height={125} alt="PLA" />
            </a>
            <a className="redbull" href="https://www.redbull.com/us-en/" target="_blank" rel="noreferrer">
              <img src={redbull} alt="Redbull" />
            </a>
            <a className="ALTAIR" href="https://altair.com/" target="_blank" rel="noreferrer">
              <img src={altair} width={400} height={25} alt="Altair" />
            </a>
            <a className="redbull" href="https://klapperichtoolinc.com/" target="_blank" rel="noreferrer">
              <img src={KTinc} alt="KTinc" />
            </a>
            <a className="ACC" href="https://www.americancampus.com/" target="_blank" rel="noreferrer">
              <img src={ACC} width={300} height={125} alt="ACC" />
            </a>
            <a className="ACC" href="https://wagner-machine.com/" target="_blank" rel="noreferrer">
              <img src={Wagner} width={300} height={125} alt="WagnerMachine" />
            </a>
            <a className="ACC" href="https://indataconsulting.com/" target="_blank" rel="noreferrer">
              <img src={InData} width={300} height={125} alt="InData" />
            </a>
        </div>
      </div>
    </div>
  );
}

/*
<a className="randolph" href="https://warandolph.com/" target="_blank">
  <img src={warinc} alt="Randolph Image" />
</a>
*/

export default Home;