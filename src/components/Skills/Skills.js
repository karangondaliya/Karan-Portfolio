import React from 'react';
import './Skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faReact, faJs, faHtml5, faCss3, faNodeJs, faGit, faPython, faPhp, 
  faBootstrap,faJava
} from '@fortawesome/free-brands-svg-icons';
import { 
  faCode, faServer, faDatabase, faNetworkWired, faFileCode, 
  faCubes, faTools,
  faC,
  faCloud
} from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skillsList = [
    { name: 'JavaScript', icon: faJs, color: '#f7df1e', textColor: '#000000' },
    { name: 'React', icon: faReact, color: '#61dafb', textColor: '#000000' },
    { name: 'HTML5', icon: faHtml5, color: '#e34f26', textColor: '#ffffff' },
    { name: 'CSS3', icon: faCss3, color: '#1572b6', textColor: '#ffffff' },
    { name: 'Node.js', icon: faNodeJs, color: '#8cc84b', textColor: '#000000' },
    { name: 'Express.js', icon: faServer, color: '#404040', textColor: '#ffffff' },
    { name: 'TypeScript', icon: faCode, color: '#3178c6', textColor: '#ffffff' },
    { name: 'Python', icon: faPython, color: '#3776ab', textColor: '#ffffff' },
    { name: 'C', icon: faC, color: '#00599c', textColor: '#ffffff' },
    { name: 'Java', icon: faJava, color: '#007396', textColor: '#ffffff' },
    { name: 'C#', icon: faCode, color: '#239120', textColor: '#ffffff' },
    { name: 'PHP', icon: faPhp, color: '#777bb4', textColor: '#ffffff' },
    { name: 'MongoDB', icon: faDatabase, color: '#47a248', textColor: '#ffffff' },
    { name: 'Microsoft SQL Server', icon: faDatabase, color: '#cc2927', textColor: '#ffffff' },
    { name: 'PostgreSQL', icon: faDatabase, color: '#336791', textColor: '#ffffff' },
    { name: 'JWT', icon: faFileCode, color: '#000000', textColor: '#ffffff' },
    { name: 'Git', icon: faGit, color: '#f05032', textColor: '#ffffff' },
    { name: 'Bootstrap', icon: faBootstrap, color: '#7952b3', textColor: '#ffffff' },
    { name: '.NET Core', icon: faCode, color: '#512bd4', textColor: '#ffffff' },
    { name: '.NET MAUI', icon: faNetworkWired, color: '#512bd4', textColor: '#ffffff' },
    { name: 'ANT Design', icon: faCubes, color: '#0170fe', textColor: '#ffffff' },
    { name: 'Redux', icon: faCubes, color: '#764abc', textColor: '#ffffff' },
    { name: 'Postman', icon: faTools, color: '#ff6c37', textColor: '#ffffff' },
    { name: 'Render', icon: faServer, color: '#46e3b7', textColor: '#000000' },
    { name: 'Microsoft Azure', icon: faCloud, color: '#0078d4', textColor: '#ffffff' }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        
        <div className="skills-grid">
          {skillsList.map((skill, index) => (
            <div 
              key={index} 
              className="skill-block"
              style={{ 
                backgroundColor: skill.color,
                color: skill.textColor
              }}
            >
              <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;