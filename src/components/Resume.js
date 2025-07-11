import React from 'react';
import './Resume.css';

const Resume = () => {
  const education = [
    {
      title: 'BSc in Computer Science and Information Technology',
      years: 'April 2022 – Present',
      institution: 'Samriddhi College, Bhaktapur, Nepal',
      description: 'Predicted Grade: A'
    },
    
  ];

  

  const skills = [
    'C , C# and C++ ', 'HTML , CSS and JavaScript',
    'React.js', 'Responsive Web Design',
    'MySQL, Database Design and Integration',
    'VS Code', 'Git and GitHub', 
    'Languages: Nepali (Native), English (Fluent)',
    'Self-motivated, Energetic, Teamwork and Collaboration'
  ];

  const projects = [
    {
      title: 'SpecsSpecs',
      description: 'E-commerce site with React.js — login, cart, payment, checkout.'
    },
    {
      title: 'PAN Registration Portal',
      description: 'An E-Governance Portal for PAN Number generation.'
    },
    {
      title: 'Patenagi Tourism Website',
      description: 'Responsive tourism site with React and MySQL backend.'
    }
  ];

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resume</h2>
          <div className="section-underline"></div>
          <p className="section-description">
            A motivated BSc.CSIT student at Samriddhi College with strong foundational skills in frontend web development,
            proficient in JavaScript and React.js, with excellent communication skills and a strong work ethic.
          </p>
        </div>

        <div className="resume-content">
          <div className="resume-section">
            <h3 className="resume-section-title">Summary</h3>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h4 className="timeline-title">Manjila Thapa</h4>
              <p className="timeline-description">
                Enthusiastic frontend developer with a passion for clean UI and user-friendly interfaces.
              </p>
              <ul className="timeline-description">
                <li>Lokanthali, Bhaktapur, Nepal</li>
                <li>+977-9824084878</li>
                <li>manjila2059@gmail.com</li>
                <li>
                  <a href="https://github.com/manjilaaa" target="_blank" rel="noopener noreferrer">GitHub</a> | 
                  <a href="https://www.linkedin.com/in/manjila-thapa-4360142a8/" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <h4 className="timeline-title">{edu.title}</h4>
                  {edu.years && <div className="timeline-years">{edu.years}</div>}
                  <p className="timeline-institution">{edu.institution}</p>
                  <p className="timeline-description">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

       

          <div className="resume-section">
             
            <h3 className="resume-section-title">Skills</h3>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
            <ul className="skills-list">
              {skills.map((skill, index) => (
                <li key={index} className="skill-item">{skill}</li>
              ))}
            </ul>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Projects</h3>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
            <ul className="projects-list">
              {projects.map((project, index) => (
                <li key={index} className="project-item">
                  <strong>{project.title}:</strong> {project.description}
                </li>
              ))}
            </ul>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Certification</h3>
            <div className="timeline-item">
                   <div className="timeline-dot"></div>

            <p>CISCO Networking Academy - Certificate of Course Completion (8 March 2023)</p>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title">Hobbies & Interests</h3>
             <div className="timeline-item">
              <div className="timeline-dot"></div>
            <ul>
              <li>Coding and software development: Interested in exploring new tech stacks to grow my career as a Software Engineer.</li>
              <li>Cooking: Interested in learning new recipes.</li>
              <li>Outdoor Activities: Participate in hiking and camping.</li>
            </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
