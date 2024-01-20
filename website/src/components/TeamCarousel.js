import React, { useState } from 'react';
import '../styles/TeamCarousel.css';

const teamMembers = [
  { id: 1, name: 'Member 1' },
  { id: 2, name: 'Member 2' },
  { id: 3, name: 'Member 3' },
  { id: 4, name: 'Member 4' },
  { id: 5, name: 'Member 5' },
];

const TeamCarousel = () => {
  const [currentMember, setCurrentMember] = useState(0);

  const nextMember = () => {
    setCurrentMember((prevMember) => (prevMember + 1) % teamMembers.length);
  };

  const prevMember = () => {
    setCurrentMember((prevMember) =>
      prevMember === 0 ? teamMembers.length - 3 : prevMember - 1
    );
  };

  return (
    <div className="team-carousel">
      <button onClick={prevMember}>&lt;</button>
      <div className="carousel-panel">
        {teamMembers.slice(currentMember, currentMember + 3).map((member) => (
          <div key={member.id} className="member-card">
            {member.name}
          </div>
        ))}
      </div>
      <button onClick={nextMember}>&gt;</button>
    </div>
  );
};

export default TeamCarousel;
