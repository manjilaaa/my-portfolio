import React from 'react';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>I am a passionate frontend developer currently pursuing BSc.CSIT...</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/profile.jpg`}
              className="img-fluid"
              alt="Profile"
            />
          </div>

          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Frontend Developer</h3>
            <p className="fst-italic">
              Building clean and functional user interfaces.
            </p>

            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>Jan 1, 2002</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+977 98xxxxxxx</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Bhaktapur, Nepal</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>22</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BSc.CSIT</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>manjila2059@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>

            <p>
              I enjoy transforming ideas into interactive experiences using React and modern frontend tools.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
