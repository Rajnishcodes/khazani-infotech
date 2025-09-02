// src/pages/DataCenter.jsx
import React from "react";
import { Link } from "react-router-dom";
import StorageIcon from "@mui/icons-material/Storage";
import SecurityIcon from "@mui/icons-material/Security";
import CloudIcon from "@mui/icons-material/Cloud";
import DnsIcon from "@mui/icons-material/Dns";
import PowerIcon from "@mui/icons-material/Power";

import "../styles/DataCenter.css";
import dataCenter from "../assets/dataCenter.png"; // ⚡ Replace with your image

// Dynamic Features Array
const features = [
  {
    icon: <StorageIcon className="dc-icon" />,
    title: "High-Capacity Storage",
    desc: "Scalable storage solutions for enterprise workloads and growing data needs."
  },
  {
    icon: <SecurityIcon className="dc-icon" />,
    title: "Advanced Security",
    desc: "Multi-layer security including firewalls, encryption, and intrusion detection."
  },
  {
    icon: <CloudIcon className="dc-icon" />,
    title: "Cloud Integration",
    desc: "Seamless integration with public, private, and hybrid cloud environments."
  },
  {
    icon: <DnsIcon className="dc-icon" />,
    title: "Network Infrastructure",
    desc: "High-speed, reliable network backbone with redundancy for zero downtime."
  },
  {
    icon: <PowerIcon className="dc-icon" />,
    title: "Power & Cooling",
    desc: "Energy-efficient power management and advanced cooling systems."
  }
];

const DataCenter = () => {
  return (
    <main className="dc-page" aria-labelledby="dc-title">
      {/* === Hero Section === */}
      <header className="dc-hero">
        <div className="dc-hero-content">
          <h1 id="dc-title">
            <span>Data Center Solutions</span>
          </h1>
          <p>
            Delivering secure, reliable, and scalable data center solutions to
            ensure uninterrupted business operations.
          </p>
        </div>
      </header>

      {/* === Intro Section === */}
      <section className="dc-intro">
        <div className="dc-intro-content">
          <h2>
            <span>Empowering Your Digital Infrastructure</span>
          </h2>
          <p>
            Our state-of-the-art data center services are designed to provide
            secure, scalable, and resilient infrastructure that supports your
            mission-critical workloads.
          </p>
          <p>
            With 24/7 monitoring and world-class facilities, we ensure maximum
            uptime and optimized performance.
          </p>
          <p>
          Data Center Security allows enterprises to strengthen both their physical and virtual servers along with safe transitioning into software-defined data centers thus permitting application centric security across their public and private cloud environments.
        </p>
        <p>
          Our engineers are trained in the deployment of various Data Center Security solutions which will assure non-stop surveillance of both private cloud and physical on-premises data center environments. We ensure proper implementation of this highly advanced security structure for your enterprise’s complete server protection and monitoring.
        </p>
        <p>
          Our engineers are trained in the deployment of various Data Center Security solutions which will assure non-stop surveillance of both private cloud and physical on-premises data center environments. We ensure proper implementation of this highly advanced security structure for your enterprise’s complete server protection and monitoring.
        </p>
        </div>

        <div className="dc-image">
          <img
            src={dataCenter}
            alt="Data Center Solutions"
            loading="lazy"
          />
        </div>
      </section>

      {/* === Features Section === */}
      <section className="dc-features">
        <h2>Our Data Center Services</h2>
        <div className="dc-grid">
          {features.map((item, index) => (
            <article className="dc-card" key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="dc-cta">
        <h2>Looking for Secure Data Center Solutions?</h2>
        <p>
          From storage and cloud integration to high-speed networking, we offer
          end-to-end data center services tailored to your business.
        </p>
        <Link to="/contact" className="contact-btn">
          Get Started
        </Link>
      </section>
    </main>
  );
};

export default DataCenter;
