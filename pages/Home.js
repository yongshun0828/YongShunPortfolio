import React, { useState, useEffect } from 'react';
import '../styles/base.css';
import '../styles/responsive.css';
import ProfileHeader from '../components/ProfileHeader';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Expertise from '../components/Expertise';
import Languages from '../components/Languages';
import Education from '../components/Education';
import DarkModeToggle from '../components/DarkModeToggle';
import MobileNav from '../components/MobileNav';
import { profileInfo, projects, expertise, languages, education } from '../data/profileData';

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage for saved preference, default to false
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    // Apply dark mode class to body for smooth transitions
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for fixed header/navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <div className={`profile-container ${darkMode ? 'dark-mode' : ''}`}>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MobileNav 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        scrollToSection={scrollToSection}
      />
      <ProfileHeader profileInfo={profileInfo} />
      <div className="profile-content">
        <AboutMe aboutText={profileInfo.aboutMe} />
        <Projects projects={projects} />
        <div className="skills-languages-row">
          <Expertise expertise={expertise} />
          <Languages languages={languages} />
        </div>
        <Education education={education} />
      </div>
    </div>
  );
};

export default Home;

