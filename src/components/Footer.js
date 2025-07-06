import React from 'react';

function Footer() {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <h3>Manjila Thapa</h3>
          <p>Thank you for visiting my portfolio. Let’s connect!</p>
          <div className="social-links">
            <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
            <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
            <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
            <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} <strong><span>Manjila Thapa</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>

      <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
}

export default Footer;
