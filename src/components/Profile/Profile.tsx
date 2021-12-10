import React from 'react';
import './Profile.css';

export interface ProfileProps {
  photoPath: string
  flip?: boolean
  children: React.ReactNode
}

export const Profile = (props: ProfileProps) => {
  const {photoPath, flip, children} = props;

  return (
    <div className={"profile" + (flip ? " flip" : "")}>
      <div className="profile-photo-container">
        <img
          className="profile-photo"
          alt=""
          src={photoPath}
        />
      </div>
      <div className="profile-content">
        {children}
      </div>
    </div>
  );
}

export default Profile;
