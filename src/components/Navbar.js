import React from 'react';

function Navbar() {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo"><a href="#hero">Manjila Thapa</a></h1>

        <nav id="navbar" className="navbar">
          <ul>
            <li><a className="nav-link active" href="#hero">Home</a></li>
            <li><a className="nav-link" href="#about">About</a></li>
            <li><a className="nav-link" href="#resume">Resume</a></li>
            <li><a className="nav-link" href="#portfolio">Portfolio</a></li>
            <li><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
