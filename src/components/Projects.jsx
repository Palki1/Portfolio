import React from "react";
import data from "../assets/data.json";
import { AiFillGithub } from "react-icons/ai";
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  return (
    <div id="projects" className="page-container">
      <h2>My Projects</h2>
      <section className="projects-grid">
        {data.projects.map((project, index) => (
          <AnimatedSection key={index} className="project-card" delay={index * 0.06}>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="date">{project.date}</p>
              <p className="description">{project.description}</p>
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <AiFillGithub /> GitHub Repository
              </a>
            </div>
          </AnimatedSection>
        ))}
      </section>
    </div>
  );
};

export default Projects;
