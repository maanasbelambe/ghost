import React from 'react';
import PropTypes from 'prop-types';

const TeamMemberCard = ({ name, role, bio,}) => {
  return (
    <div className="team-member-card">
      <h3>{name}</h3>
      <p>{role}</p>
      <p>{bio}</p>
    </div>
  );
};

TeamMemberCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};

export default TeamMemberCard;