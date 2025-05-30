import React from 'react';
import './Education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faCalendarAlt, faMapMarkerAlt, faAward } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  const educations = [
    {
      id: 1,
      degree: "Bachelor of Technology - Computer Engineering",
      institution: "Dharamsith Desai University",
      location: "Nadiad, Gujarat",
      duration: "Sep 2023 - May 2026",
      description: "Currently pursuing an undergraduate degree in Computer Engineering.",
      achievements: ["CPI: 7.53"]
    },
    {
      id: 2,
      degree: "Diploma in Computer Engineering",
      institution: "Government Polytechnic Jamnagar (GTU)",
      location: "Jamnagar, Gujarat",
      duration: "Sep 2020 - May 2023",
      description: "Completed a diploma program focused on computer engineering fundamentals and applications.",
      achievements: ["CGPA: 9.22"]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        
        <div className="timeline">
          {educations.map(edu => (
            <div key={edu.id} className="timeline-item">
              <div className="timeline-marker">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              
              <div className="timeline-content">
                <div className="education-card">
                  <h3 className="education-degree">{edu.degree}</h3>
                  
                  <div className="education-details">
                    <div className="education-institution">
                      <h4>{edu.institution}</h4>
                      <div className="education-meta">
                        <span>
                          <FontAwesomeIcon icon={faCalendarAlt} />
                          {edu.duration}
                        </span>
                        <span>
                          <FontAwesomeIcon icon={faMapMarkerAlt} />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                    
                    <p className="education-description">
                      {edu.description}
                    </p>
                    
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="education-achievements">
                        <h5>
                          <FontAwesomeIcon icon={faAward} />
                          Achievements
                        </h5>
                        <ul>
                          {edu.achievements.map((achievement, index) => (
                            <li key={index}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;