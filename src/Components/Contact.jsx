import React from "react";
import "../Elements/Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-page">
        <div className="contact-box">
          <div className="contact-img">
            <img src={require('../images/contactLogo.png')} alt="" />
          </div>
          <div className="place-details">
            <div>
              <h2 className="location">LOCATION</h2>
              <h6 className="address">
                1200 Woodruff Road, Suite H-29 Greenville 29607
              </h6>
            </div>
            <div>
              <h2 className="phone">PHONE</h2>
              <h6 className="number">864.356.6187</h6>
            </div>
          </div>
          <div className="scanner">
            <div className="scan-box">
              <img src={require('../images/scanner.png')} alt="" />
            </div>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.409097041847!2d-82.29123832503493!3d34.820805376760354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885828c798267e67%3A0x36783daa2dd206a5!2s1200%20Woodruff%20Rd%20h%2029%2C%20Greenville%2C%20SC%2029607%2C%20USA!5e0!3m2!1sen!2sin!4v1686045192917!5m2!1sen!2sin"
            width="800"
            height="330"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
