import React, { useEffect } from 'react';
import '../styles/Team.css';
import TeamPic from '../assets/TeamPicQuad.jpg'
import Paul from '../assets/PaulHeadshot2.jpg'
import SamN from '../assets/SamHeadShot.jpg'
import Harith from '../assets/HarithPic.png'
import Evelina from '../assets/ElizaPic.JPG'
import SamB from '../assets/SamBlaker.png'


function Team() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
  const teamMembers = [
    {
      name: 'Paul Klapperich',
      position: 'President',
      image: Paul,
      bio: 'Mechanical Engineering',
    },
    {
        name: 'Sam Nutlis',
        position: 'Vice President',
        image: SamN,
        bio: 'Aerospace Engineering',
      },
      {
        name: 'Harith Palani',
        position: 'Treasurer',
        image: Harith,
        bio: 'Systems Engineering & Design',
      },
      {
        name: 'Sam Blaker',
        position: 'Secretary',
        image: SamB,
        bio: 'Finance in Agribusiness',
      },
      {
        name: 'Evelina Astranskas',
        position: 'Membership Director',
        image: Evelina,
        bio: 'Finance + Data Science',
      },
    // Add more team members as needed
  ];

  return (
    <div className="team">
      <div className="top-section">
        <img src={TeamPic} alt="Team" />
        <h1>The Team</h1>
      </div>
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div className="card" key={index}>
            <div className="image-wrapper">
              <img src={member.image} alt={member.name} />
              <h2>{member.name}</h2>
              <h3>{member.position}</h3>
              <p>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
      <h1>Subteams</h1>
      <div className="subteam-container">
        <div className="section">
          <h2>Mechanical</h2>
          <ul>
            <li>Frame</li>
            <li>Suspension</li>
            <li>CAD</li>
            <li>Drivetrain</li>
            <li>Aerodynamics</li>
            <li>Ergonomics</li>
          </ul>
        </div>
        <div className="section">
          <h2>Electrical</h2>
          <ul>
            <li>Batteries</li>
            <li>Motors</li>
            <li>Controllers</li>
            <li>Wiring</li>
            <li>System Integration</li>
          </ul>
        </div>
        <div className="section">
          <h2>Business</h2>
          <ul>
            <li>Sponsorships</li>
            <li>Outreach</li>
            <li>Finance</li>
            <li>Social Media</li>
            <li>Marketing</li>
            <li>Merch</li>
          </ul>
        </div>
        <div className="section">
          <h2>Software</h2>
          <ul>
            <li>Computer Engineering</li>
            <li>Website Development</li>
            <li>Motor Control</li>
            <li>Battery Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Team;
