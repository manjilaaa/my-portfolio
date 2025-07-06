import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contact</h2>
          <div className="section-underline"></div>
          <p className="section-description">
            Feel free to reach out to me anytime — I’m always open to discuss projects or collaborations!
          </p>
        </div>

        <div className="contact-info">
          <div className="contact-card">
            <MapPin className="contact-icon" />
            <h3 className="contact-title">Location</h3>
            <p className="contact-text">Lokanthali, Bhaktapur, Nepal</p>
          </div>
          
          <div className="contact-card">
            <Phone className="contact-icon" />
            <h3 className="contact-title">Call</h3>
            <p className="contact-text">+977 9824084878</p>
          </div>
          
          <div className="contact-card">
            <Mail className="contact-icon" />
            <h3 className="contact-title">Email</h3>
            <p className="contact-text">manjila2059@gmail.com</p>
          </div>
        </div>

        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="form-input"
            />
            
            <textarea
              name="message"
              placeholder="Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
            ></textarea>
            
            <div className="form-submit">
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
