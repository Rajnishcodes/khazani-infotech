import React from "react";
import {
  Smartphone,
  CloudQueue,
  Storage,
  Lock,
  Build,
} from "@mui/icons-material"; // ✅ MUI Icons
import "../styles/DigitalTransformation.css"; 
import digitalImage from "../assets/digitalImage.png";

const DigitalTransformation = () => {
  return (
    <div className="dt-page">
      {/* === Hero Section === */}
      <header className="dt-hero">
        <div className="dt-hero-content">
          <h1><span>Digital Transformation Services</span></h1>
          <p>
            With the rapid advancement in technology and changing market
            conditions, more and more enterprises are taking the route towards
            digital transformation.
          </p>
        </div>
      </header>

      {/* === Intro Section === */}
<section className="dt-intro">
  <div className="dt-intro-content">
    <h1><span>Hi We Are Here For You</span></h1>
    <p>
      Mobile devices and online data backup are two key sectors which have
      helped enterprises with enhanced productivity and greater flexibility.
    </p>
    <p>
      Khazani Infotech Private Limited offers robust onsite, offsite, and
      hybrid-cloud based data backup solutions for its clients. Based on
      your business needs, we help you choose a backup, retention and
      retrieval solution and our implementation services assure high
      security access to information throughout your enterprise.
    </p>
    <p>
      Our certified consultants ensure lower deployment time, reduced
      recovery time and costs, and enable your enterprise achieve higher
      scalability to adapt with changing business environments. We deliver
      regular maintenance services for optimized, non-disruptive workloads
      to increase the efficiency of your IT operations.
    </p>
  </div>

  {/* Image Section */}
  <div className="digitalimage">
  <img src={digitalImage} alt="Digital Transformation" />
</div>
</section>


      {/* === Features Section === */}
      <section className="dt-features">
        <h2>Our Digital Transformation Capabilities</h2>
        <div className="dt-grid">
          <div className="dt-card">
            <Smartphone className="dt-icon" />
            <h3>Mobile-First Solutions</h3>
            <p>
              Empower your workforce and customers with mobile-friendly, secure,
              and scalable digital tools.
            </p>
          </div>

          <div className="dt-card">
            <CloudQueue className="dt-icon" />
            <h3>Hybrid Cloud Backup</h3>
            <p>
              Reliable onsite, offsite, and cloud-based backup systems with
              maximum data protection.
            </p>
          </div>

          <div className="dt-card">
            <Storage className="dt-icon" />
            <h3>Data Management</h3>
            <p>
              Optimize data retention, retrieval, and storage strategies
              tailored to your business needs.
            </p>
          </div>

          <div className="dt-card">
            <Lock className="dt-icon" />
            <h3>Security & Compliance</h3>
            <p>
              Ensure high-security access and compliance across your digital
              infrastructure.
            </p>
          </div>

          <div className="dt-card">
            <Build className="dt-icon" />
            <h3>Scalable IT Operations</h3>
            <p>
              Reduce downtime and improve efficiency with adaptive IT solutions
              and proactive maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="dt-cta">
        <h2>Accelerate Your Digital Transformation</h2>
        <p>
          Partner with Khazani Infotech to build a future-ready enterprise that
          adapts to change and thrives in a competitive market.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default DigitalTransformation;
