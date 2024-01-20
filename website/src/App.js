import React from 'react';
import './styles/App.css';
import './styles/BikeAnimation.css'; // Add this line
import TeamCarousel from './components/TeamCarousel';
import movingBike from './movingBike2.png';

const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <header>
        <h1>GHOST Electric</h1>
        <nav>
          <ul>
            <li onClick={() => scrollToSection('mission')}>Mission/Purpose</li>
            <li onClick={() => scrollToSection('joining')}>Interested in Joining?</li>
            <li onClick={() => scrollToSection('team')}>The Team</li>
            <li onClick={() => scrollToSection('exec')}>Executive Bios</li>
            <li onClick={() => scrollToSection('bike')}>The Bike</li>
            <li onClick={() => scrollToSection('plans')}>Future Plans</li>
            <li onClick={() => scrollToSection('race')}>The Race/AHRMA</li>
          </ul>
        </nav>
      </header>
      <section id="mission">
        <h2>Mission</h2>
        <p>
        GHOST Electric is a registered student organization (RSO) at The University of Illinois Urbana-Champaign, whose purpose is to design, construct, and race electric motorcycles while fitting within certain criteria given by the AHRMA Formula Lightning race organizers.
        </p>
      </section>
      <section id="joining">
        <h2>Interested in Joining?</h2>
        <p>Contact us if you are interested in joining our team!</p>
      </section>
      <section id="team">
        <h2>The Team</h2>
        <p>Introduce your team members and their roles here.</p>
        <TeamCarousel />
      </section>
      <section id="exec">
        <h2>Executive Bios</h2>
        <p>Provide brief biographies of your executive team members.</p>
      </section>
      <section id="bike">
        <h2>The Bike</h2>
        <p>Describe the electric motorcycle and its features.</p>
      </section>
      <section id="plans">
        <h2>Future Plans</h2>
        <p>Outline your organization's future plans and goals.</p>
      </section>
      <section id="race">
        <h2>The Race - AHRMA</h2>
        <p>The AHRMA Formula Lightning series is the premier zero-emissions motorcycle road racing series in the US. Bikes may be powered by any means of propulsion that does not emit exhaust, such as electricity, magnetism, gravity, flywheels, springs, etc.</p>
      </section>
      <footer>
        <p>&copy; 2024 GHOST Electric. All rights reserved.</p>
      </footer>
      {/* Add the bike element */}
      <img className="bike" src={movingBike} alt="Moving Bike" />
    </div>
  );
};

export default App;
