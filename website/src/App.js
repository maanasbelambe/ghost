import React from 'react';
import './styles/App.css';
import './styles/BikeAnimation.css'; // Add this line
import TeamCarousel from './components/TeamCarousel';
import GhostHeader from './Ghost_Logo_v2.png';
import movingBike from './movingBike2.png';
import TeamMemberCard from './components/TeamMemberCard';

const App = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <header>
        <img className="logo" src={GhostHeader} alt="GhostHeader" />
        <nav>
          <ul>
            <li onClick={() => scrollToSection('mission')}>Mission</li>
            <li onClick={() => scrollToSection('joining')}>Join</li>
            <li onClick={() => scrollToSection('team')}>The Team</li>
            <li onClick={() => scrollToSection('bike')}>The Bike</li>
            <li onClick={() => scrollToSection('plans')}>Future Plans</li>
            <li onClick={() => scrollToSection('race')}>The Race</li>
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
        <p>Fill out this form: <a href="http://tinyurl.com/3ft4826h" target="_blank">http://tinyurl.com/3ft4826h</a></p>
      </section>
      <section id="team">
        <h2>The Team</h2>
        <div className="team-cards-container">
          {/* Use TeamMemberCard component for each team member */}
          <TeamMemberCard
            name="Paul Klapperich"
            role="President"
            bio="Email"
          />
          <TeamMemberCard
            name="Sam Nutlis"
            role="Vice President"
            bio="Email"
          />
          <TeamMemberCard
            name="Harith Palani"
            role="Treasurer"
            bio="Email"
          />
          <TeamMemberCard
            name="Sam Blaker"
            role="Secretary"
            bio="Email"
          />
          <TeamMemberCard
            name="Evelina Astranskas"
            role="Membership Director"
            bio="Email"
          />
          {/* Add more TeamMemberCard components for other team members */}
        </div>
      </section>
      <section id="bike">
        <h2>The Bike</h2>
        <p>Coming Vroom.</p>
      </section>
      <section id="plans">
        <h2>Future Plans</h2>
        <p>Text for future plans and goals.</p>
      </section>
      <section id="race">
        <h2>The Race - AHRMA</h2>
        <p>The AHRMA Formula Lightning series is the premier zero-emissions motorcycle road racing series in the US. Bikes may be powered by any means of propulsion that does not emit exhaust, such as electricity, magnetism, gravity, flywheels, springs, etc. See more at: <a href="https://ahrma.org/" target="_blank">https://ahrma.org/.</a></p>
      </section>
      <footer>
        <p>&copy; 2024 GHOST Electric. All rights reserved.</p>
      </footer>
      {/* Add the bike element 
      <img className="bike" src={movingBike} alt="Moving Bike" />*/}
    </div>
  );
};

export default App;
