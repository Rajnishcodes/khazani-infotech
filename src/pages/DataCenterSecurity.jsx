// src/pages/DataCenterSecurity.jsx
import React from "react";
import { Link } from "react-router-dom";
import SecurityIcon from "@mui/icons-material/Security";
import LockIcon from "@mui/icons-material/Lock";
import CloudIcon from "@mui/icons-material/Cloud";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import StorageIcon from "@mui/icons-material/Storage";

import "../styles/DataCenterSecurity.css";
import dataCenterSecurity from "../assets/dataCenterSecurity.png"; // ⚡ replace with your image

// Dynamic features
const features = [
  {
    icon: <SecurityIcon className="dcs-icon" />,
    title: "Physical Security",
    desc: "Biometric access, CCTV monitoring, and restricted entry zones ensure physical safety."
  },
  {
    icon: <LockIcon className="dcs-icon" />,
    title: "Data Encryption",
    desc: "End-to-end encryption keeps sensitive information safe from cyber threats."
  },
  {
    icon: <CloudIcon className="dcs-icon" />,
    title: "Cloud Protection",
    desc: "Secure cloud backups and disaster recovery solutions for business continuity."
  },
  {
    icon: <VerifiedUserIcon className="dcs-icon" />,
    title: "Compliance Ready",
    desc: "Adherence to industry standards like ISO, GDPR, and HIPAA for full compliance."
  },
  {
    icon: <StorageIcon className="dcs-icon" />,
    title: "Redundant Systems",
    desc: "Backup power, storage, and networking to prevent downtime and data loss."
  }
];

const DataCenterSecurity = () => {
  return (
    <main className="dcs-page" aria-labelledby="dcs-title">
      {/* === Hero Section === */}
      <header className="dcs-hero">
        <div className="dcs-hero-content">
          <h1 id="dcs-title">
            <span>Data Center Security</span>
          </h1>
          <p>
            Protecting your critical infrastructure with advanced security
            measures, ensuring uptime, compliance, and peace of mind.
          </p>
        </div>
      </header>

      {/* === Intro Section === */}
      <section className="dcs-intro">
        <div className="dcs-intro-content">
          <h2>
            <span>Why Data Center Security Matters</span>
          </h2>
          <p>
            In today’s digital economy, data centers are the backbone of IT
            operations. Securing them is essential to prevent unauthorized
            access, data theft, and downtime.
          </p>
          <p>
            Our comprehensive security solutions cover physical, network, and
            cloud security, ensuring your business remains operational and
            compliant.
          </p>
          <p>
            Data Center Security allows enterprises to strengthen both their physical and virtual servers along with safe transitioning into software-defined data centers thus permitting application centric security across their public and private cloud environments.
          </p>
          <p>
            Our engineers are trained in the deployment of various Data Center Security solutions which will assure non-stop surveillance of both private cloud and physical on-premises data center environments. We ensure proper implementation of this highly advanced security structure for your enterprise’s complete server protection and monitoring.
          </p>
          <p>
            We have an expertise in the application and configuration of SDDC and help in the operational effectiveness of your enterprise by enabling you to swiftly respond to current and emerging security threats.
          </p>
        </div>

        <div className="dcs-image">
          <img
            src={dataCenterSecurity}
            alt="Data center security illustration"
            loading="lazy"
          />
        </div>
      </section>

      {/* === Features Section === */}
      <section className="dcs-features">
        <h2>Our Key Security Measures</h2>
        <div className="dcs-grid">
          {features.map((item, index) => (
            <article className="dcs-card" key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="dcs-cta">
        <h2>Secure Your Infrastructure Today</h2>
        <p>
          Partner with us to safeguard your mission-critical IT assets with
          world-class data center security solutions.
        </p>
        <Link to="/contact" className="contact-btn">
          Get Started
        </Link>
      </section>
    </main>
  );
};

export default DataCenterSecurity;
