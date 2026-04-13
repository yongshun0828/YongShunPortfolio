import React, { useState } from 'react';
import '../styles/ProfileHeader.css';

const ProfileHeader = ({ profileInfo }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <header className="profile-header">
      <div className="profile-header-content">
        <div className="profile-avatar">
          <div className="avatar-circle">
            {!imageError ? (
              <img 
                src={profileInfo.photo} 
                alt={profileInfo.name} 
                className="avatar-image"
                onError={() => setImageError(true)}
              />
            ) : (
              <span className="avatar-fallback">LYS</span>
            )}
          </div>
        </div>
        <div className="profile-intro">
          <h1 className="profile-name">{profileInfo.name}</h1>
          <p className="profile-title">{profileInfo.title}</p>
          <div className="profile-badges">
            {profileInfo.badges.map((badge, index) => (
              <span key={index} className="badge">{badge}</span>
            ))}
          </div>
          <div className="profile-contacts">
            {profileInfo.email && (
              <a href={`mailto:${profileInfo.email}`} className="contact-link">
                📧 {profileInfo.email}
              </a>
            )}
            {profileInfo.phone && (
              <a href={`tel:${profileInfo.phone}`} className="contact-link">
                📞 {profileInfo.phone}
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileHeader;

