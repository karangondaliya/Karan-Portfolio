import React from 'react';
import './Hero.css';
import profilePic from './DP.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
        <div className="hero-shapes">
          <div className="shape shape1"></div>
          <div className="shape shape2"></div>
          <div className="shape shape3"></div>
        </div>
      </div>
      <div className="container">
        <div className="hero-content">
          <div className="profile-image-container">
            <div className="profile-image-border">
              <img src={profilePic} alt="Karan Gondaliya" className="profile-image" />
            </div>
          </div>
          
          <div className="hero-text">
            <h1>Hey, I am <span className="highlight">Karan</span></h1>
            <p className="hero-subtitle">Engineer, Tinkerer, Curious</p>
            <p className="hero-description">
              Passionate about creating amazing web experiences with modern technologies.
            </p>
            <div className="cta-container">
              <div className="hero-buttons">
                <a href="#projects" className="btn btn-primary">View My Work</a>
                <a href="https://drive.google.com/file/d/16GjHYYa7jNmkJDAlzZ2rnXswn4Br9Uh4/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Resume</a>
                <a href="#contact" className="btn btn-secondary">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;