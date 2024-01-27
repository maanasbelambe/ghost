import React from 'react';
import './styles/App.css';
import './styles/BikeAnimation.css';
//import TeamCarousel from './components/TeamCarousel';
import GhostHeader from './Ghost_Logo_v2.png';
import { SocialIcon } from 'react-social-icons';
//import movingBike from './movingBikeTemp.png';
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
            <li onClick={() => scrollToSection('team')}>The Team</li>
            <li onClick={() => scrollToSection('bike')}>The Bike</li>
            {/*<li onClick={() => scrollToSection('plans')}>Future Plans</li>*/}
            <li onClick={() => scrollToSection('race')}>The Race</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
            <li onClick={() => window.open("http://tinyurl.com/3ft4826h", "_blank")} className="join-button">Join Us</li>
          </ul>
        </nav>
      </header>
      <div className="landing-image">
        <div className="text-overlay">
          <h1>Electric Motorcycle Design and Racing{/*cool bike sh!t @ UIUC*/}</h1>
          <p>
            at the <span className="highlight">University of Illinois</span>
          </p>
        </div>
      </div>
      <section id="mission">
        <h2>Mission</h2>
        <p>The Ghost Electric Motorcycles club at the University of Illinois at Urbana-Champaign is an innovative and dynamic student-run organization with a clear mission: to foster more sustainable engineering processes through the design and construction of electronic motorcycles. </p>
        <br></br>
        <p>Ghost aims to participate in the annual American Historical Racing Motorcycle Association (AHRMA) Formula Lightning competition. As a newly established team, Ghost is committed to fostering a vibrant community of aspiring cross-disciplinary engineers, drawing upon the rich expertise and knowledge cultivated within UIUC's prestigious engineering program. With a year-round dedication to their craft, the Ghost team exemplifies a passion for sustainable engineering and a collective pursuit of excellence in the exciting realm of electric motorcycle design and racing.</p>
      </section>
      {/*<section id="joining">
        <h2>Interested in Joining?</h2>
        <p><a href="http://tinyurl.com/3ft4826h" target="_blank">Click this Form</a></p>
      </section>*/}
      <section id="team">
        <h2>The Team</h2>
        <div className="team-cards-container">
          {/* Use TeamMemberCard component for each team member */}
          <TeamMemberCard
            firstName="Paul"
            lastName="Klapperich"
            role="President"
            bio="Major: Mechanical Engineering"
            email="paulek2@illinois.edu"
          />
          <TeamMemberCard
            firstName="Sam"
            lastName="Nutlis"
            role="Vice President"
            bio="Major: Aerospace Engineering"
            email="snutlis2@illinois.edu"
          />
          <TeamMemberCard
            firstName="Harith"
            lastName="Palani"
            role="Treasurer"
            bio="Major: Systems Engineering & Design"
            email="hpala3@illinois.edu"
          />
          <TeamMemberCard
            firstName="Sam"
            lastName="Blaker"
            role="Secretary"
            bio="Major: Finance in Agribusiness"
            email="sblaker2@illinois.edu"
          />
          <TeamMemberCard
            firstName="Evelina"
            lastName="Astranskas"
            role="Membership Director"
            bio="Major: Finance + Data Science"
            email="evelina2@illinois.edu"
          />
          {/* Add more TeamMemberCard components for other team members */}
        </div>
      </section>
      <section id="bike">
        <h2>The Bike</h2>
        <p>Coming Vroom.</p>
      </section>
      {/*<section id="plans">
        <h2>Future Plans</h2>
        <p>Text for future plans and goals.</p>
      </section>*/}
      <section id="race">
        <h2>The Race - AHRMA</h2>
        <p>The AHRMA Formula Lightning series is the premier zero-emissions motorcycle road racing series in the US. Bikes may be powered by any means of propulsion that does not emit exhaust, such as electricity, magnetism, gravity, flywheels, springs, etc. Learn more at <a href="https://ahrma.org/" target="_blank" rel="noopener noreferrer">ahrma.org.</a></p>
      </section>
      <section id="contact">
        <h2>Contact Us</h2>
        <p>Shoot us an email at <a href={`mailto:ghostuiuc@gmail.com`}> ghostuiuc@gmail.com</a> with any questions or donations!</p>
      </section>
      <footer>
        <p>
          <SocialIcon url='mailto:ghostuiuc@gmail.com' bgColor='#717f93' fgColor='#ff9f69'/>
          {' '}
          <SocialIcon url="https://www.linkedin.com/company/ghost-electric-motorcycle/" bgColor='#ff9f69' fgColor='#717f93'/>
          {' '}
          <SocialIcon url="https://www.instagram.com/ghost_uiuc/" bgColor='#717f93' fgColor='#ff9f69'/>
          {' '}
          <SocialIcon url="https://discord.gg/56yq68vJKX" bgColor='#ff9f69' fgColor='#717f93'/>
        </p>
      </footer>
      {/* Add the bike element 
      <img className="bike" src={movingBike} alt="Moving Bike" />*/}
    </div>
  );
};

export default App;
