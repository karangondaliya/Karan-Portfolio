import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Karan, a passionate Full Stack Developer with experience in 
              modern web technologies. I love creating efficient, scalable, and 
              user-friendly applications.
            </p>
            <p>
              My journey in web development started with curiosity and has grown 
              into a passion for building amazing digital experiences. I'm always 
              eager to learn new technologies and tackle challenging problems.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with 
              the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;