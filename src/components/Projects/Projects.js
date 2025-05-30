import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const projects = [
    {
      title: "CodeMate-AI",
      description: "An AI-powered coding assistant tool that helps developers write, debug, and optimize code efficiently.",
      technologies: ["React", "Express", "Node.js", "MongoDB", "Langchain", "Python"],
      github: "https://github.com/karangondaliya/CodeMate-AI",
      live: "#"
    },
    {
      title: "i-Medicare - Hostpital Management System", 
      description: "A healthcare platform connecting patients with doctors, featuring appointment scheduling and medical records management.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/karangondaliya/i-Medicare/tree/dev",
      live: "https://i-medicare.onrender.com/"
    },
    {
      title: "E-commerce Web App",
      description: "A full-featured e-commerce application built with .NET Core MVC, including product catalog, cart functionality, and payment processing.",
      technologies: [".NET Core", "MVC", "C#", "SQL Server"],
      github: "https://github.com/karangondaliya/Dot-Net-Core-MVC-Ecommerce-Web-App",
      live: "https://ecommerce-webapp-a3avc8ebb0gdd3b4.westindia-01.azurewebsites.net/"
    },
    {
      title: "WorkHub - Employee Monitoring System",
      description: "A comprehensive solution for tracking employee productivity, attendance, and performance with separate frontend and backend repositories.",
      technologies: [".NET MAUI", "C#", ".NET Core", "PostgreSQL", "JWT", "Entity Framework Core"],
      github: "https://github.com/karangondaliya/Employee-Monitoring-System",
      live: "#"
    },
    {
      title: "UrbanDrive",
      description: "A vehicle rental platform allowing users to book cars, bikes, and other transport options with a modern user interface.",
      technologies: ["HTML5", "CSS3", "JavaScript", "ASP.NET"],
      github: "https://github.com/karangondaliya/UrbanDrive",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} /> GitHub
                  </a>
                  {project.live !== "#" && (
                    <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                      {project.title === "Employee Monitoring System" ? (
                        <span>Backend</span>
                      ) : (
                        <><FontAwesomeIcon icon={faChrome} /> Live Demo</>
                      )}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;