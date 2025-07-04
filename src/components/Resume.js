import React from 'react';

function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Here's a quick look at my educational background and experiences.</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Manjila Thapa</h4>
              <p>
                <em>
                  Enthusiastic frontend developer with a passion for clean UI and user-friendly interfaces.
                </em>
              </p>
              <ul>
                <li>Lokanthali, Bhaktapur, Nepal</li>
                <li>+977-9824084878</li>
                <li>manjila2059@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>BSc. CSIT</h4>
              <h5>2022 - Present</h5>
              <p><em>Samriddhi College, Bhaktapur</em></p>
              <p>
                Studying computer science with a strong focus on software development and frontend technologies.
              </p>
            </div>
          </div>

          <div className="col-lg-6">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-item">
              <h4>Frontend Intern (Personal Projects)</h4>
              <h5>2023 - Present</h5>
              <p><em>Remote</em></p>
              <ul>
                <li>Built personal projects using React, Next.js, and MySQL</li>
                <li>Created responsive UI for tourism and PAN registration systems</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
