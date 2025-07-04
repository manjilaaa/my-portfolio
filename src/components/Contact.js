import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Feel free to reach out to me!</p>
        </div>

        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Lokanthali, Bhaktapur, Nepal</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>manjila2059@gmail.com</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+977 9824084878</p>
              </div>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form className="php-email-form" onSubmit={(e) => e.preventDefault()}>
              <div className="row">
                <div className="form-group col-md-6">
                  <label>Your Name</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="form-group col-md-6">
                  <label>Your Email</label>
                  <input type="email" className="form-control" required />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input type="text" className="form-control" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" rows="5" required></textarea>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
