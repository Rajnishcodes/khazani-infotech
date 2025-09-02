// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../assets/khazaniLogo.png";
import "../styles/Navbar.css";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !event.target.closest(".dropdown") &&
        !event.target.closest(".dropbtn")
      ) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      {/* === Logo + Hamburger === */}
      <div className="navbar-logo">
        <img src={image} alt="Logo" />
        <div className="navbar-texth1"></div>

        {/* Hamburger Menu */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* === Navbar Links === */}
      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        {/* Solutions Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setActiveDropdown("solution")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button className="dropbtn">Solutions ▾</button>
          <ul
            className={`dropdown-content ${
              activeDropdown === "solution" ? "show" : ""
            }`}
          >
            <li>
              <Link to="/digitaltransformation">Digital Transformation</Link>
            </li>
            <li>
              <Link to="/appdevelopment">APP & Software Development</Link>
            </li>
            <li>
              <Link to="/managedservices">Managed Services</Link>
            </li>
            <li>
              <Link to="/authorizedservice">Authorized Services</Link>
            </li>
            <li>
              <Link to="/professionalservice">Professional Services</Link>
            </li>
          </ul>
        </li>

        {/* Services Mega Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setActiveDropdown("services")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button className="dropbtn">Services ▾</button>
          <div
            className={`mega-dropdown ${
              activeDropdown === "services" ? "show" : ""
            }`}
          >
            <div>
              <h4></h4>
              <Link to="/clientsidecomputing">
                <li>Client Side Computing</li>
              </Link>
              <Link to="/cloudsolution">
                <li>Cloud Solutions</li>
              </Link>
              <Link to="/NetworkIntegration">
                <li>Network Integration</li>
              </Link>
              <Link to="/DataCenterSecurity">
                <li>Data Center Security</li>
              </Link>
              <Link to="/iotai">
                <li>IOT & AI</li>
              </Link>
            </div>
          </div>
        </li>

        {/* Hardware Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setActiveDropdown("hardware")}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <button className="dropbtn">Hardware ▾</button>
          <div
            className={`mega-dropdown ${
              activeDropdown === "hardware" ? "show" : ""
            }`}
          >
            <div>
              <h4></h4>
              <Link to="/computer">
                <li>Computers</li>
              </Link>
              <Link to="/datacenter">
                <li>Data Centers</li>
              </Link>
              <Link to="/networking">
                <li>Networking</li>
              </Link>
            </div>
          </div>
        </li>

        {/* Static Links */}
        <li>
          <Link to="/casestudy" className="partner-btn">
            Case Studies
          </Link>
        </li>
        <li>
          <Link to="/contact" className="contact-btn">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
