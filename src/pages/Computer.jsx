// src/pages/Computer.jsx
import React from "react";
import { Link } from "react-router-dom";
import ComputerIcon from "@mui/icons-material/Computer";
import BuildIcon from "@mui/icons-material/Build";
import SecurityIcon from "@mui/icons-material/Security";
import StorageIcon from "@mui/icons-material/Storage";
import UpdateIcon from "@mui/icons-material/Update";

import "../styles/Computer.css";
import computerImg from "../assets/computer.png"; // ⚡ Replace with your own image

// Dynamic Features Array
const features = [
  {
    icon: <ComputerIcon className="comp-icon" />,
    title: "Workstation Setup",
    desc: "High-performance desktop and laptop solutions tailored for your business needs."
  },
  {
    icon: <BuildIcon className="comp-icon" />,
    title: "Hardware Support",
    desc: "Professional repair and maintenance services to keep your systems running smoothly."
  },
  {
    icon: <SecurityIcon className="comp-icon" />,
    title: "Endpoint Security",
    desc: "Advanced antivirus and endpoint protection to safeguard your devices."
  },
  {
    icon: <StorageIcon className="comp-icon" />,
    title: "Data Backup",
    desc: "Reliable backup and recovery solutions to prevent data loss and downtime."
  },
  {
    icon: <UpdateIcon className="comp-icon" />,
    title: "Software Updates",
    desc: "Regular patching and upgrades to keep your systems secure and efficient."
  }
];

const Computer = () => {
  return (
    <main className="comp-page" aria-labelledby="comp-title">
      {/* === Hero Section === */}
      <header className="comp-hero">
        <div className="comp-hero-content">
          <h1 id="comp-title">
            <span>Computer Solutions</span>
          </h1>
          <p>
            Reliable, scalable, and secure computer solutions designed to power
            your workforce with efficiency and performance.
          </p>
        </div>
      </header>

      {/* === Intro Section === */}
      <section className="comp-intro">
        <div className="comp-intro-content">
          <h2>
            <span>Empowering Businesses with Technology</span>
          </h2>
          <p>
            From setting up new workstations to maintaining and securing your
            existing systems, we provide end-to-end computer solutions to ensure
            your business operates without interruptions.
          </p>
          <p>
            Our team ensures that your hardware and software are optimized for
            maximum performance and reliability.
          </p>
          <p>
            We provide support and maintenance of desktops and workstations. Our varied experience in different desktop and workstation architectures and the different operating system will enable our client to better maintain their daily computing requirements.
          </p>
        </div>

        <div className="comp-image">
          <img
            src={computerImg}
            alt="Computer Solutions illustration"
            loading="lazy"
          />
        </div>
      </section>

      {/* === Features Section === */}
      <section className="comp-features">
        <h2>Our Computer Services</h2>
        <div className="comp-grid">
          {features.map((item, index) => (
            <article className="comp-card" key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="comp-cta">
        <h2>Need Reliable Computer Solutions?</h2>
        <p>
          Whether it’s system setup, repair, or security, we’re here to keep
          your computers running at peak performance.
        </p>
        <Link to="/contact" className="contact-btn">
          Get Support
        </Link>
      </section>
    </main>
  );
};

export default Computer;
