import React from 'react';
import './Profile.css';

export interface ProfileProps {
  photoPath: string
  flip?: boolean
  children: React.ReactNode
  small?: boolean
}

export const Profile = (props: ProfileProps) => {
  const {photoPath, flip, children, small} = props;

  return (
    <div className={"profile" + (flip ? " flip-profile" : "")}>
      <div className="profile-photo-container">
        <img
          className={"profile-photo" + (small ? " small" : "")}
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
