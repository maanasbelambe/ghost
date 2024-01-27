import React from 'react';
import PropTypes from 'prop-types';

const TeamMemberCard = ({ firstName, lastName, role, bio, email}) => {
  return (
    <div className="team-member-card">
      <h3>{firstName} {lastName}</h3>
      <p>{role}</p>
      <p>{bio}</p>
      <a href={`mailto:${email}`}> Contact {firstName}</a>
    </div>
  );
};

TeamMemberCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default TeamMemberCard;