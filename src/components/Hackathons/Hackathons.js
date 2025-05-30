import React from 'react';
import './Hackathons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faTrophy, faCalendarAlt, faMapMarkerAlt, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub as faGithubBrand } from '@fortawesome/free-brands-svg-icons';

// Helper function to determine technology type for styling
const getTechType = (tech) => {
  const techLower = tech.toLowerCase();
  
  // Frontend technologies
  if (/react|javascript|css|html|tailwind|bootstrap|vue|angular/.test(techLower)) {
    return 'frontend';
  }
  
  // Backend technologies
  if (/node|express js|django|flask|fastapi|\.net|php|java|spring|laravel/.test(techLower)) {
    return 'backend';
  }
  
  // Database technologies
  if (/mongodb|mysql|postgresql|sqlite|redis|sql/.test(techLower)) {
    return 'database';
  }
  
  // ML/AI technologies
  if (/python|tensorflow|pytorch|sklearn|cnn|machine learning|ai|kaggle|langchain|rag|hybrid rag|matplotlib/.test(techLower)) {
    return 'ml';
  }
  
  // Mobile technologies
  if (/flutter|react native|swift|kotlin|android|ios|dart/.test(techLower)) {
    return 'mobile';
  }
  
  // DevOps/Tools
  if (/git|github|docker|kubernetes|aws|azure|ci\/cd|jenkins/.test(techLower)) {
    return 'devops';
  }
  
  // Default
  return 'other';
};

const Hackathons = () => {
  const hackathons = [
    {
      id: 1,
      name: "Holboxathon",
      organizer: "Holbox AI",
      date: "2024",
      location: "Virtual",
      description: "Teams working on complex software projects waste time extracting relevant info from large codebases, with different roles needing tailored insights. Developed CodeMate-AI to help backend engineers, frontend developers, AI engineers, and product managers efficiently extract needed information.",
      achievement: "Participant",
      achievement_type: "participant",
      techStack: ["React", "Express JS", "MongoDB", "FastAPI", "CSS", "LangChain", "Hybrid RAG"],
      github: "https://github.com/karangondaliya/CodeMate-AI"
    },
    {
      id: 2,
      name: "DUHacks 3.0",
      organizer: "GDSC DDU",
      date: "February 2025",
      location: "Nadiad",
      description: "Automated manual driving in video games which can be repetitive and monotonous. The solution enhances gameplay and serves as an interesting use case for Computer Vision and Deep Learning applications in autonomous driving.",
      achievement: "Participant",
      achievement_type: "participant",
      techStack: ["Python", "TensorFlow", "CNN", "SKLearn", "MatplotLib", "Kaggle"],
      github: "https://github.com/ZalaHarshpalsinh/Tarzan/"
    },
    {
      id: 3,
      name: "DUHacks 2.0",
      organizer: "GDSC DDU",
      date: "February 2024",
      location: "Nadiad",
      description: "NourishNet: A platform that serves as a bridge between restaurants with excess food and NGOs dedicated to feeding communities. Through this app, restaurants can easily inform NGOs about surplus food they have available for donation.",
      achievement: "Participant",
      achievement_type: "participant",
      techStack: ["PHP", "MySQL", "JavaScript", "CSS"],
      github: "https://github.com/karangondaliya/NourishNet"
    },
    {
      id: 4,
      name: "SSIP Hackathon",
      organizer: "Government of Gujarat",
      date: "October 2022",
      location: "Rajkot",
      description: "Developed a solution for fire prevention and protection in industrial plants. The system includes fire detection system, fire alarm system, and fire prevention plan to protect employees and property and to ensure safe working systems.",
      achievement: "Participant",
      achievement_type: "participant",
      techStack: ["Dart", "Flutter", "SQLite"]
    }
  ];

  const getAchievementClass = (type) => {
    switch(type) {
      case 'winner': return 'achievement-winner';
      case 'finalist': return 'achievement-finalist';
      case 'participant': return 'achievement-participant';
      default: return '';
    }
  };

  return (
    <section id="hackathons" className="hackathons">
      <div className="container">
        <h2 className="section-title">Hackathons</h2>
        
        <div className="hackathon-grid">
          {hackathons.map((hackathon) => (
            <div key={hackathon.id} className="hackathon-card">
              <div className="hackathon-header">
                <FontAwesomeIcon icon={faLaptopCode} className="hackathon-icon" />
                <h3 className="hackathon-name">{hackathon.name}</h3>
                <span className={`hackathon-achievement ${getAchievementClass(hackathon.achievement_type)}`}>
                  {hackathon.achievement_type === 'winner' && <FontAwesomeIcon icon={faTrophy} />}
                  {hackathon.achievement}
                </span>
              </div>
              
              <div className="hackathon-meta">
                <span><FontAwesomeIcon icon={faCalendarAlt} /> {hackathon.date}</span>
                <span><FontAwesomeIcon icon={faMapMarkerAlt} /> {hackathon.location}</span>
              </div>
              
              <p className="hackathon-organizer">Organized by {hackathon.organizer}</p>
              <p className="hackathon-description">{hackathon.description}</p>
              
              <div className="hackathon-tech">
                <FontAwesomeIcon icon={faCodeBranch} />
                <div className="tech-tags">
                  {hackathon.techStack.map((tech, index) => (
                    <span 
                      key={index} 
                      className="tech-tag" 
                      data-type={getTechType(tech)}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {hackathon.github && (
                <div className="hackathon-github">
                  <a href={hackathon.github} target="_blank" rel="noopener noreferrer" className="github-link">
                    <FontAwesomeIcon icon={faGithubBrand} /> View on GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathons;