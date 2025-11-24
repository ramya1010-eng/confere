import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">

      <h1 className="contact-title">Contacts</h1>

      <div className="contact-container">

        {/* LEFT — CONTACT DETAILS */}
        <div className="contact-box">

          <p className="contact-subtitle">Here’s where you can reach us.</p>

          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span className="contact-text">
              Mobile No: <a href="tel:09344037078">09344037078</a>
            </span>
          </div>

          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <span className="contact-text">
              Email: <a href="mailto:iccetconf@gmail.com" className="contact-link">
  iccetconf@gmail.com
</a>


            </span>
          </div>

        </div>

        {/* RIGHT — MAP */}
        <div className="map-box">
          <iframe
            title="College Location"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "12px" }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.720092293048!2d77.3635!3d11.2746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96fdb33df1f67%3A0x6b8c779a6a7e81c6!2sVidhya%20Vikas%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1700000000000"
          ></iframe>
        </div>

      </div>
    </div>
  );
}
