import React, { useState, useEffect } from 'react';
import '../styles/Team.css';
import TeamPic from '../assets/TeamPicQuad.jpg';
import Paul from '../assets/Paul-headshot.JPG';
import SamN from '../assets/Sam-Nutlis-headshot.JPG';
import Harith from '../assets/Harith-headshot.JPG';
// import Evelina from '../assets/ElizaPic.JPG';
import SamB from '../assets/Sam-Blaker-headshot.JPG';
import { FaLinkedin } from 'react-icons/fa';
import AdamJ from '../assets/Adam-headshot.JPG';
// import MattW from '../assets/matt_wunsch_pic.jpg';
// import MichaelP from '../assets/michael_przybyl_pic.JPG';
// import SidS from '../assets/sid_sudhir_pic.jpeg';
import ConnorV from '../assets/Connor-headshot.JPG';
import KaiaK from '../assets/Kaia-headshot.JPG';
import DominickB from '../assets/dominick_braico_pic.png';
import Danny from '../assets/danny-headshot.JPG';
import Arjun from '../assets/Arjun-headshot.JPG';




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
            linkedin: 'https://www.linkedin.com/in/paulklapperich/',
        },
        {
            name: 'Harith Palani',
            position: 'Vice President & Battery Lead',
            image: Harith,
            bio: 'Systems Engineering & Design',
            linkedin: 'https://www.linkedin.com/in/harith-palani-66b62a253/',
        },
        {
            name: 'Sam Nutlis',
            position: 'Aero Lead',
            image: SamN,
            bio: 'Aerospace Engineering',
            linkedin: 'https://www.linkedin.com/in/samnutlis/',
        },
        
        // {
        //     name: 'Matt Wunsch', 
        //     position: 'Suspension Lead', 
        //     image: MattW, 
        //     bio: 'Mechanical Engineering', 
        //     linkedin: 'https://www.linkedin.com/in/matthew-wunsch-9765431a0/'
        // },

        {
            name: 'Dominick Braico', 
            position: 'Control Systems Lead', 
            image: DominickB, 
            bio: 'Mechanical Engineering', 
            linkedin: 'https://www.linkedin.com/in/dominick-braico/'
        },
        {
            name: 'Adam Johnson', 
            position: 'Drivetrain Lead', 
            image: AdamJ, 
            bio: 'Mechanical Engineering', 
            linkedin: 'https://www.linkedin.com/in/adam-johnson-48b217250/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        },
        {
            name: 'Sam Blaker',
            position: 'Treasurer',
            image: SamB,
            bio: 'Finance in Agribusiness',
            linkedin: 'https://www.linkedin.com/in/samblaker/',
        },
        // {
        //     name: 'Michael Przybyl', 
        //     position: 'Battery Lead', 
        //     image: MichaelP, 
        //     bio: 'Electrical Engineering', 
        //     linkedin: 'https://www.linkedin.com/in/michael-przybyl-5637a9252/'
        // },
        {
            name: 'Connor Vorasorn', 
            position: 'Safety Lead', 
            image: ConnorV, 
            bio: 'Mechanical Engineering', 
            linkedin: 'https://www.linkedin.com/in/connorvorasorn/'
        },
        // {
        //     name: 'Sid Sudhir', 
        //     position: 'Vehicle Performance Lead', 
        //     image: SidS, 
        //     bio: 'Aerospace Engineering', 
        //     linkedin: 'https://www.linkedin.com/in/siddharthsudhir/'
        // },
        {
            name: 'Kaia Kelley', 
            position: 'Membership Director', 
            image: KaiaK, 
            bio: 'Mechanical Engineering', 
            linkedin: 'https://www.linkedin.com/in/kaia-kelley-a04865290/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app'
        },
        {
            name: 'Daniel Koltchev', 
            position: 'Frame Lead', 
            image: Danny, 
            bio: 'Mechanical Engineering', 
            linkedin: 'https://www.linkedin.com/in/daniel-koltchev-278278279/'
        },
        {
            name: 'Arjun Appel', 
            position: 'Suspension Lead', 
            image: Arjun, 
            bio: 'Mechanical Engineering', 
            linkedin: 'https://www.linkedin.com/in/arjun-appel/'
        },
        
        
        // {
        //     name: 'Evelina Astranskas',
        //     position: 'Membership Director',
        //     image: Evelina,
        //     bio: 'Finance + Data Science',
        //     linkedin: 'https://www.linkedin.com/in/evelina-astranskas/',
        // },
    ];

    // State to track which icon is hovered
    const [hoveredIndex, setHoveredIndex] = useState(null);

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
                            <img className="portrait-img-wrapper" src={member.image} alt={member.name} />
                            <h2>{member.name}</h2>
                            <h3>{member.position}</h3>
                            <p>{member.bio}</p>
                            {member.linkedin && (
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin
                                        size={30}
                                        color={hoveredIndex === index ? '#fa6300' : '#254acf'} // Orange if hovered, light blue otherwise
                                        onMouseEnter={() => setHoveredIndex(index)} // Set hovered index
                                        onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index
                                        style={{ cursor: 'pointer' }}
                                    />
                                </a>
                            )}
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