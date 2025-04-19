import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending an email or storing the data
    console.log('Form Data:', formData);
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' }); // Reset form after submission
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p>Email: info@novascotiaagrico.ca</p>
        <p>Phone: (902) 123-4567</p>
        <p>Address: 100 Greenfield Lane, Annapolis Valley, NS</p>
      </div>

      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>

      <footer className="github-link">
        <a
          href="https://github.com/lgg6bentley"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i> Follow me on GitHub
        </a>
      </footer>
    </section>
  );
}

export default Contact;
