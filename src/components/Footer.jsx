import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri"; // chatbot icon
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* About Us */}
          <div className="footer-about">
            <h5>ABOUT US</h5>
            <p>
              Khazani Infotech Private Limited is a leading provider of IT
              Products and Services in the areas of multi-vendor support, cloud
              computing, data centers setup, supply and sales of HP Products,
              VMware solutions, IT hardware and software, and a wide range of
              technology services.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h5>GET IN TOUCH WITH US</h5>
            <div className="contact-item">
              <div className="icon-circle">
                <MdPhone />
              </div>
              <a href="tel:+919996790786">+91 9996790786</a>
            </div>
            <div className="contact-item">
              <div className="icon-circle">
                <MdEmail />
              </div>
              <a href="mailto:info@khazani-infotech.com">
                info@khazani-infotech.com
              </a>
            </div>
            <button className="contact-btn">CONTACT US</button>
          </div>
        </div>

        <hr />
        <p className="footer-copy">
          © {new Date().getFullYear()} Khazani Infotech Private Limited
        </p>
      </div>

      {/* Floating Chatbot */}
      <button className="chatbot-btn" aria-label="Chatbot">
        <RiRobot2Line size={28} />
      </button>
    </footer>
  );
}
