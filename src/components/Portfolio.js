import React from 'react';

const Portfolio = () => {
  // Dummy data for projects
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'This is a brief description of Project One. It showcases awesome frontend skills.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Project+1',
      projectLink: '#'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'Project Two is a cool React application demonstrating dynamic UI and API usage.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Project+2',
      projectLink: '#'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'An amazing project focused on responsive design and accessibility best practices.',
      imageUrl: 'https://via.placeholder.com/300x200?text=Project+3',
      projectLink: '#'
    }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2>My Portfolio</h2>
        <div className="portfolio-items" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {projects.map((project) => (
            <div key={project.id} className="portfolio-item" style={{ flex: '1 1 300px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
              <img
                src={project.imageUrl}
                alt={project.title}
                style={{ width: '100%', height: 'auto', borderRadius: '6px' }}
              />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
