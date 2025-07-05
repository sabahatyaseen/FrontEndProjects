// src/components/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <h2>Message us</h2>
          <label>
            Name
            <input type="text" placeholder="Your full name" required />
          </label>

          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Message
            <textarea rows="5" placeholder="Write your message..." required></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>

        {/* Location Info or Map Placeholder */}
        <div className="contact-info">
          <h2>Visit Us</h2>

          <div className="map-container">
            <iframe 
            src="https://www.google.com/maps/embed?pb=YOUR_EMBED_LINK"
            width="100%" 
            height="300" 
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="SweetTreats Bakery Location"
            ></iframe>
          </div>     

           <p>SweetTreats Bakery<br />
          123 Treat Street, Lahore<br />
          Open: 10:00 AM – 9:00 PM<br />
          Phone: +92 300 1234567</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
