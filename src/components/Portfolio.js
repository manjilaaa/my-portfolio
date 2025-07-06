import React from 'react';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Tourism Website – Patanagi',
    tech: 'React, MySQL, Node.js',
    image: `${process.env.PUBLIC_URL}/assets/img/portfolio/project1.jpg`,
    live: 'https://patanagi.vercel.app',
    github: 'https://github.com/manjilaaa/patanagi-tourism',
  },
  {
    id: 2,
    title: 'PAN Registration System',
    tech: 'React, Next.js API, MySQL',
    image: `${process.env.PUBLIC_URL}/assets/img/portfolio/project2.jpg`,
    live: 'https://patanagi.vercel.app',
    github: 'https://github.com/manjilaaa/Egov_portal.git',
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Portfolio</h2>
          <div className="section-underline"></div>
          <p className="section-description">
            Some of the projects I’ve built recently.
          </p>
        </div>

        <div className="portfolio-grid">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-box">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-box-image"
              />
              <div className="portfolio-box-content">
                <h3 className="portfolio-box-title">{project.title}</h3>
                <p className="portfolio-box-tech">{project.tech}</p>
                <div className="portfolio-box-links">
                  {project.live && project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="portfolio-button">
                      Live Demo
                    </a>
                  )}
                  {project.github && project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="portfolio-button">
                      GitHub
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
}

export default Portfolio;
