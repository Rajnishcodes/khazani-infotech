// src/pages/CloudSolution.jsx
import React from "react";
import { Link } from "react-router-dom";
import CloudIcon from "@mui/icons-material/Cloud";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import BackupIcon from "@mui/icons-material/Backup";
import DevicesIcon from "@mui/icons-material/Devices";

import "../styles/CloudSolution.css";
import cloudSolution from "../assets/cloudSolution.png"; // ⚡ replace with actual image

// Dynamic Features
const features = [
  {
    icon: <CloudIcon className="cloud-icon" />,
    title: "Scalable Cloud Services",
    desc: "Expand or shrink resources instantly with pay-as-you-go flexibility."
  },
  {
    icon: <SecurityIcon className="cloud-icon" />,
    title: "Enterprise-Grade Security",
    desc: "Advanced data protection, firewalls, and compliance-driven cloud solutions."
  },
  {
    icon: <BackupIcon className="cloud-icon" />,
    title: "Disaster Recovery",
    desc: "Reliable backup and recovery solutions to ensure zero downtime."
  },
  {
    icon: <SpeedIcon className="cloud-icon" />,
    title: "Optimized Performance",
    desc: "High-speed cloud hosting with reduced latency and faster response times."
  },
  {
    icon: <DevicesIcon className="cloud-icon" />,
    title: "Cross-Platform Access",
    desc: "Access your cloud apps securely from any device, anywhere, anytime."
  }
];

const CloudSolution = () => {
  return (
    <main className="cloud-page" aria-labelledby="cloud-title">
      {/* === Hero Section === */}
      <header className="cloud-hero">
        <div className="cloud-hero-content">
          <h1 id="cloud-title">
            <span>Cloud Solutions</span>
          </h1>
          <p>
            Transform your business with secure, scalable, and intelligent cloud
            computing solutions tailored for growth.
          </p>
        </div>
      </header>

      {/* === Intro Section === */}
      <section className="cloud-intro">
        <div className="cloud-intro-content">
          <h2>
            <span>Empowering Businesses with Cloud</span>
          </h2>
          <p>
            Our Cloud Solutions are designed to help enterprises enhance
            efficiency, reduce costs, and improve data security while enabling
            faster innovation.
          </p>
          <p>
            Whether it’s private, public, or hybrid cloud, we deliver tailored
            solutions that keep your business future-ready.
          </p>
          <p>
            Khazani Infotech Private Limited has a proven approach to delivering cloud productivity solutions. Our team of globally recognized certified consultants have an expertise in architecture design and implementation services, and build a roadmap for the smooth migration of your crucial files and data from your on-premise setup to the state-of-the-art cloud productivity platform.
          </p>
          <p>
            Our association with Microsoft Office 365 combined with our skills will ensure an increase in your enterprise productivity and performance. With our tested methodology, your enterprise is assured of high quality business solutions at reduced costs with increased productivity.
          </p>
          <p>
            We implement strategized solutions which help provide optimized results for your enterprise. Utilization of Microsoft Office 365 ensures a secure platform providing greater flexibility and familiar tools for collaboration across all platforms.
          </p>
        </div>

        <div className="cloud-image">
          <img
            src={cloudSolution}
            alt="Cloud computing illustration"
            loading="lazy"
          />
        </div>
      </section>

      {/* === Features Section === */}
      <section className="cloud-features">
        <h2>Why Choose Our Cloud Solutions?</h2>
        <div className="cloud-grid">
          {features.map((item, index) => (
            <article className="cloud-card" key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="cloud-cta">
        <h2>Unlock the Power of the Cloud</h2>
        <p>
          Scale your business operations with secure, efficient, and
          future-proof cloud solutions. Let’s get started today.
        </p>
        <Link to="/contact" className="contact-btn">
          Get Started
        </Link>
      </section>
    </main>
  );
};

export default CloudSolution;
