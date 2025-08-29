import React, { useEffect, useState, useRef } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "../style/contact.css";

export default function Contact() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`contact-section ${visible ? "visible" : ""}`}
    >
      <h2 className="section-title">Get in Touch</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your Message" required />

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        <div className="contact-details">
          <div className="contact-detail">
            <MdEmail className="contact-icon" />
            <span>email@example.com</span>
          </div>
          <div className="contact-detail">
            <FaPhone className="contact-icon" />
            <span>+1 (123) 456-7890</span>
          </div>
          <div className="contact-detail">
            <FaMapMarkerAlt className="contact-icon" />
            <span>City, State, Country</span>
          </div>
        </div>
      </div>
    </section>
  );
}
