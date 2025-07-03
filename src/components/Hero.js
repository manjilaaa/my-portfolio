import React from 'react';

function Hero() {
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="fade-in">
        <h1>Manjila Thapa</h1>
        <p>I'm <span className="typed" data-typed-items="Frontend Developer, Coder, Learner"></span></p>
        <div className="social-links">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
