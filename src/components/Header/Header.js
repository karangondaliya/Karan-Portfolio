import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import ThemeContext from '../../ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  // Handle scroll event to change header style when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  
  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="#home" onClick={handleLinkClick}>
              <span className="logo-text"><span className="highlight">Karan Gondaliya</span></span>
            </a>
          </div>
          <div className="header-actions">
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
            </button>
            <div 
              className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul>
              <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
              <li><a href="#about" onClick={handleLinkClick}>About</a></li>
              <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
              <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
              <li><a href="#education" onClick={handleLinkClick}>Education</a></li>
              <li><a href="#hackathons" onClick={handleLinkClick}>Hackathons</a></li>
              <li><a href="#achievements" onClick={handleLinkClick}>Achievements</a></li>
              <li><a href="#contact" onClick={handleLinkClick} className="contact-btn">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;