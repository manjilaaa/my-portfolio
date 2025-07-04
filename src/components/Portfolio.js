import React from 'react';

const projects = [
  {
    title: 'Tourism Website – Patanagi',
    tech: 'React, MySQL, Node.js',
    img: `${process.env.PUBLIC_URL}/assets/img/portfolio/project1.jpg`,
    live: 'https://patanagi.vercel.app',
    github: 'https://github.com/manjilaaa/patanagi-tourism'
  },
  {
    title: 'PAN Registration System',
    tech: 'React, Next.js API, MySQL',
    img: `${process.env.PUBLIC_URL}/assets/img/portfolio/project2.jpg`,
    live: '#',
    github: '#'
  }
  // Add more projects here
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Some of the projects I’ve built recently.</p>
        </div>

        <div className="row portfolio-container">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 portfolio-item">
              <div className="portfolio-wrap">
                <img src={project.img} className="img-fluid" alt={project.title} />
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <p>{project.tech}</p>
                  <div className="portfolio-links">
                    <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <i className="bx bx-link"></i>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                      <i className="bx bxl-github"></i>
                    </a>
                  </div>
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
