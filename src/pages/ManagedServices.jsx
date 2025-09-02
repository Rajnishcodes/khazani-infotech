import React from "react";
import {
  CloudQueue,
  Security,
  BuildCircle,
  Storage,
  SupportAgent,
} from "@mui/icons-material";
import "../styles/ManagedServices.css"; 
import managedService from "../assets/managedService.png";
const ManagedServices = () => {
  return (
    <div className="service-page">
      {/* === Hero Section === */}
      <header className="service-hero">
        <h1>
          <span>Managed IT Services</span>
        </h1>
        <p>
          Empower your business with 24/7 managed IT services that ensure
          efficiency, scalability, and security while you focus on innovation
          and growth.
        </p>
      </header>

      {/* === Intro Section === */}
      <section className="service-intro">
        <div className="service-intro-content">
          <h1>
            <span>Comprehensive Managed Services</span>
          </h1>
          <p>
            Our services are provided to keep IT Products in good operating condition. We provide managed maintenance involving functional checks, servicing, repairing, or replacing of necessary devices, IT equipment, and supporting utilities in industrial, business, governmental, and residential.
          </p>
          <p>
            Khazani Infotech offers a wide range of managed services designed to
            optimize your IT infrastructure and reduce operational overhead.
          </p>
          <p>
            Our expert team proactively monitors, maintains, and secures your
            systems, ensuring maximum uptime and minimal disruption.
          </p>
          <p>
            From cloud management to network security, we tailor our services to
            meet your business requirements with flexibility and scalability.
          </p>
        </div>

        <div className="service-image">
          <img src={managedService} alt="" />
        </div>
      </section>

      {/* === Features Section === */}
      <section className="service-features">
        <h2>Our Managed Service Capabilities</h2>
        <div className="service-grid">
          <div className="service-card">
            <CloudQueue className="app-icon" />
            <h3>Cloud Infrastructure</h3>
            <p>
              End-to-end management of hybrid and multi-cloud environments with
              high availability.
            </p>
          </div>

          <div className="service-card">
            <Security className="app-icon" />
            <h3>Security & Compliance</h3>
            <p>
              Continuous monitoring and compliance-driven solutions to safeguard
              your business.
            </p>
          </div>

          <div className="service-card">
            <BuildCircle className="app-icon" />
            <h3> Maintenance</h3>
            <p>
              Automated updates, performance tuning, and issue resolution before
              disruptions occur.
            </p>
          </div>

          <div className="service-card">
            <Storage className="app-icon" />
            <h3>Service Level Management</h3>
            <p>
              Reliable backup solutions and rapid recovery strategies for
              business continuity.
            </p>
          </div>

          <div className="service-card">
            <SupportAgent className="app-icon" />
            <h3>24/7 Support</h3>
            <p>
              Round-the-clock monitoring and dedicated IT support to ensure
              smooth operations.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="service-cta">
        <h2>Partner With Us for Reliable IT Operations</h2>
        <p>
          Let Khazani Infotech manage your IT infrastructure while you focus on
          growing your business with confidence.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default ManagedServices;
