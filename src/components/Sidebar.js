import React, { useState } from 'react';
import {
  Home,
  User,
  FileText,
  Briefcase,
  MessageSquare,
  Menu,
  X,
  Facebook,
  Instagram,
  Github,
  Linkedin,
} from 'lucide-react';

import './Sidebar.css';
import manjilaThapa from '../assets/my-profile.jpg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-btn">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-content">
          <div className="profile-section">
            <img src={manjilaThapa} alt="Manjila Thapa" className="profile-image" />
            <h1 className="profile-name">Manjila Thapa</h1>

            <div className="social-links">
              <a
                href="https://www.facebook.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://www.instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://github.com/manjilaaa"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/manjila-thapa-4360142a8/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <nav className="navigation">
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button onClick={() => scrollToSection(item.id)} className="nav-button">
                    <item.icon size={20} className="nav-icon" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
};

export default Sidebar;
