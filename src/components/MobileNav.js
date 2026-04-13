import React from 'react';
import { menuItems } from '../data/profileData';
import '../styles/MobileNav.css';

const MobileNav = ({ menuOpen, setMenuOpen, darkMode, toggleDarkMode, scrollToSection }) => {
  const menuItemsWithToggle = [
    ...menuItems,
    { 
      id: 'dark-mode', 
      label: darkMode ? 'Light Mode' : 'Dark Mode', 
      icon: darkMode ? '☀️' : '🌙', 
      isToggle: true 
    }
  ];

  return (
    <div className="mobile-nav">
      <button 
        className="mobile-nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>
      {menuOpen && (
        <div className="mobile-nav-menu">
          {menuItemsWithToggle.map((item) => (
            <React.Fragment key={item.id}>
              {item.isToggle && <div className="nav-divider"></div>}
              <button
                className={`mobile-nav-item ${item.isToggle ? 'nav-toggle-item' : ''}`}
                onClick={() => {
                  if (item.isToggle) {
                    toggleDarkMode();
                  } else {
                    scrollToSection(item.id);
                  }
                }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileNav;

