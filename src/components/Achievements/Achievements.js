import React from 'react';
import './Achievements.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faAws } from '@fortawesome/free-brands-svg-icons';

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: 'The Bits and Bytes of Computer Networks',
      issuer: 'Google',
      date: 'July 2022',
      icon: faGoogle,
      description: 'Comprehensive understanding of computer networking fundamentals, protocols, and infrastructure.',
      skills: ['Networking', 'TCP/IP', 'Network Security', 'Troubleshooting'],
      credentialLink: 'https://coursera.org/verify/S87SA5N4NFRU' // Replace with actual credential link if available
    },
    {
      id: 2,
      title: 'Cloud Foundation',
      issuer: 'AWS',
      date: 'June 2024',
      icon: faAws,
      description: 'Foundational knowledge of AWS cloud services, architecture principles, and best practices.',
      skills: ['Cloud Computing', 'AWS', 'Infrastructure'],
      credentialLink: 'https://www.credly.com/go/mLTNQ5TD' // Replace with actual credential link if available
    }
  ];

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        
        <div className="achievements-grid">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-icon">
                <FontAwesomeIcon icon={achievement.icon} />
              </div>
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <div className="achievement-issuer">
                  <FontAwesomeIcon icon={faCertificate} />
                  <span>{achievement.issuer}</span>
                  <span className="achievement-date">{achievement.date}</span>
                </div>
                <p className="achievement-description">{achievement.description}</p>
                <div className="achievement-skills">
                  {achievement.skills.map((skill, index) => (
                    <span key={index} className="achievement-skill">{skill}</span>
                  ))}
                </div>
                <a href={achievement.credentialLink} className="view-credential" target="_blank" rel="noopener noreferrer">
                  View Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;