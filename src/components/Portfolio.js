import React, { useEffect } from 'react';

const projects = [
  {
    title: 'Tourism Website – Patanagi',
    category: 'web',
    tech: 'React, MySQL, Node.js',
    img: `${process.env.PUBLIC_URL}/assets/img/portfolio/project1.jpg`,
    live: 'https://patanagi.vercel.app',
    github: 'https://github.com/manjilaaa/patanagi-tourism',
  },
  {
    title: 'PAN Registration System',
    category: 'app',
    tech: 'React, Next.js API, MySQL',
    img: `${process.env.PUBLIC_URL}/assets/img/portfolio/project2.jpg`,
    live: '#',
    github: '#',
  },
  // Add more projects here with appropriate categories like 'web', 'app', etc.
];

function Portfolio() {
  useEffect(() => {
    // Initialize Glightbox
    if (window.Glightbox) {
      window.Glightbox({ selector: '.portfolio-lightbox' });
    }

    // Initialize Isotope
    if (window.Isotope) {
      const portfolioContainer = document.querySelector('.portfolio-container');
      if (portfolioContainer) {
        const iso = new window.Isotope(portfolioContainer, {
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows',
        });

        // Filtering buttons
        const filters = document.querySelectorAll('#portfolio-flters li');
        filters.forEach((filter) => {
          filter.addEventListener('click', (e) => {
            e.preventDefault();
            filters.forEach((el) => el.classList.remove('filter-active'));
            filter.classList.add('filter-active');

            const filterValue = filter.getAttribute('data-filter');
            iso.arrange({ filter: filterValue === '*' ? '*' : filterValue });
          });
        });
      }
    }
  }, []);

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Some of the projects I’ve built recently.</p>
        </div>

        {/* Filter Buttons */}
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">All</li>
              <li data-filter=".filter-web">Web</li>
              <li data-filter=".filter-app">App</li>
            </ul>
          </div>
        </div>

        {/* Portfolio Items */}
        <div className="row portfolio-container">
          {projects.map((project, idx) => (
            <div key={idx} className={`col-lg-4 col-md-6 portfolio-item filter-${project.category}`}>
              <div className="portfolio-wrap">
                <img src={project.img} className="img-fluid" alt={project.title} />
                <div className="portfolio-info">
                  <h4>{project.title}</h4>
                  <p>{project.tech || project.category}</p>
                  <div className="portfolio-links">
                    {/* Lightbox preview */}
                    <a href={project.img} className="portfolio-lightbox" title={project.title}>
                      <i className="bx bx-plus"></i>
                    </a>

                    {/* Live project link */}
                    {project.live && project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" title="Live Demo">
                        <i className="bx bx-link"></i>
                      </a>
                    )}

                    {/* GitHub link */}
                    {project.github && project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" title="GitHub">
                        <i className="bx bxl-github"></i>
                      </a>
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
}

export default Portfolio;
