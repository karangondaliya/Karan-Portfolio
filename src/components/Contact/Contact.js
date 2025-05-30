import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>
            <p>
              I'm always interested in new opportunities and projects. 
              Feel free to reach out if you'd like to discuss potential 
              collaborations or just want to say hello.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong> karangondaliya10@gmail.com
              </div>
              <div className="contact-item">
                <strong>Phone:</strong> +91 78620 54577
              </div>
              <div className="contact-item">
                <strong>Location:</strong> Gujarat, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;