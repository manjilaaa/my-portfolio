import React, { useEffect } from 'react';
import './Hero.css';
import myProfile from '../assets/my-profile.jpg';
function Hero() {
  useEffect(() => {
    const typedScript = document.createElement('script');
    typedScript.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12/lib/typed.min.js';
    typedScript.onload = () => {
      if (window.Typed) {
        new window.Typed('.typed', {
          strings: ['Frontend Developer', 'Coder', 'Learner'],
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
          loop: true,
          showCursor: true,
          cursorChar: '|',
        });
      }
    };
    document.body.appendChild(typedScript);

    return () => {
      document.body.removeChild(typedScript);
    };
  }, []);

  return (
    <section id="hero" className="hero"
        style={{
        backgroundImage: `url(${myProfile})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
      
      >
      <div className="hero-overlay"></div>
      <div className="hero-background"></div>

      <div className="hero-content">
        <h1 className="hero-title">Manjila Thapa</h1>
        <p className="hero-subtitle">
          I'm&nbsp;  <span className="typed"></span>
        </p>
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
