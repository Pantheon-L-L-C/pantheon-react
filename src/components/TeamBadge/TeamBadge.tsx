import React from 'react';
import './TeamBadge.css';

export interface TeamBadgeProps {
  photoPath: string
  firstName: string
  handle: string
  title: string
  location: string
}

export const TeamBadge = (props: TeamBadgeProps) => {
  const {photoPath, firstName, handle, title, location} = props;

  return (
    <div className="badge">
      <img 
        className="badge-photo"
        alt={firstName} 
        src={photoPath}
      />
      <h1>{firstName}</h1>
      <p>{handle}</p>
      <h2>{title}</h2>
      <h3>{location}</h3>
    </div>
  );
}

export default TeamBadge;
