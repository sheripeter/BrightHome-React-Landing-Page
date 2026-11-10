
import { useState } from 'react';

function Contact() {
  const initialFormData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

    setSubmitted(false);
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    setSubmitted(true);
    setFormData(initialFormData);
  }

  return (
    <section id="contact" className="contact">

      <div className="contact-info">
        <span className="eyebrow">CONTACT US</span>

        <h2>Let's Make Your Home Shine!</h2>

        <p>
          Have questions or need a cleaning service?<br></br>
          Get in touch with our team.
        </p>

        <div className="contact-detail">
          <h3>Phone</h3>
          <p>+9012345678</p>
        </div>

        <div className="contact-detail">
          <h3>Email</h3>
          <p>brighthome-email@example.com</p>
        </div>

        <div className="contact-detail">
          <h3>Working Hours</h3>
          <p>9:00 AM to 5:00 PM – Monday – Saturday</p>
        </div>
      </div>

      <div className="contact-form">

        <h3>Send Us a Message</h3>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="name">Your Name</label>

            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength={2}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>

            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
              minLength={10}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message</label>

            <textarea
              id="message"
              name="message"
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange}
              required
              minLength={10}
              rows={5}
            />
          </div>

          <button type="submit" className="btn">
            Send Message
          </button>

          {submitted && (
            <p className="success-message" role="status">
              Thank you! We'll get in touch.
            </p>
          )}

        </form>
      </div>

    </section>
  );
}

export default Contact;
