import React from 'react';
import './About.css';
import myProfile from '../assets/my-profile.jpg'; 

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About</h2>
          <p>
            I am a motivated BSc.CSIT student at Samriddhi College, Bhaktapur,
            passionate about frontend development and eager to grow my skills in
            JavaScript, React.js, and web technologies.
          </p>
          <div className="section-underline"></div>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img
              src={myProfile}
              alt="About Manjila"
              className="about-img"
            />
          </div>

          <div className="about-info">
            <h3 className="about-subtitle">
              Aspiring Frontend Developer
            </h3>
            <p className="about-description">
              Strong foundation in frontend web development, committed to learning and
              building user-friendly, clean, and efficient interfaces.
            </p>

            <div className="about-details">
              <div className="details-column">
                <ul className="details-list">
                  <li><strong className="detail-label">Location:</strong> Lokanthali, Bhaktapur, Nepal</li>
                  <li><strong className="detail-label">Phone:</strong> +977-9824084878</li>
                  <li><strong className="detail-label">Email:</strong> manjila2059@gmail.com</li>
                </ul>
              </div>
              <div className="details-column">
                <ul className="details-list">
                  <li><strong className="detail-label">Degree:</strong> BSc. CSIT (Ongoing)</li>
                  <li><strong className="detail-label">College:</strong> Samriddhi College</li>
                  

                  {/* <li><strong className="detail-label">GitHub:</strong> <a href="https://github.com/manjilaaa" target="_blank" rel="noopener noreferrer">github.com/manjilaaa</a></li>
                  <li><strong className="detail-label">LinkedIn:</strong> <a href="https://www.linkedin.com/in/manjila-thapa-4360142a8/" target="_blank" rel="noopener noreferrer">linkedin.com/in/manjila-thapa-4360142a8</a></li> */}
                </ul>
              </div>
            </div>

            <p className="about-text">
              I am passionate about technology and innovation, constantly exploring new tools and
              frameworks to enhance my skills. I aim to build efficient, responsive, and visually
              appealing websites that provide great user experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
