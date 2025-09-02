// src/pages/NetworkIntegration.jsx
import React from "react";
import { Link } from "react-router-dom";
import LanIcon from "@mui/icons-material/Lan";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import DevicesIcon from "@mui/icons-material/Devices";
import BuildIcon from "@mui/icons-material/Build";

import "../styles/NetworkIntegration.css";
import networkImg from "../assets/networkIntegration.png"; // ⚡ replace with your actual image

// Dynamic features
const features = [
  {
    icon: <LanIcon className="network-icon" />,
    title: "Seamless Connectivity",
    desc: "Integrate LAN, WAN, and VPNs into a unified network for smooth communication."
  },
  {
    icon: <SecurityIcon className="network-icon" />,
    title: "Advanced Security",
    desc: "Secure firewalls, intrusion detection, and encryption for safe networking."
  },
  {
    icon: <SpeedIcon className="network-icon" />,
    title: "Optimized Performance",
    desc: "Low latency and high-speed configurations for enhanced productivity."
  },
  {
    icon: <DevicesIcon className="network-icon" />,
    title: "Device Integration",
    desc: "Enable cross-device connectivity for smooth IT and business workflows."
  },
  {
    icon: <BuildIcon className="network-icon" />,
    title: "Custom Solutions",
    desc: "Tailored network solutions designed for your business requirements."
  }
];

const NetworkIntegration = () => {
  return (
    <main className="network-page" aria-labelledby="network-title">
      {/* === Hero Section === */}
      <header className="network-hero">
        <div className="network-hero-content">
          <h1 id="network-title">
            <span>Network Integration</span>
          </h1>
          <p>
            Empower your business with fast, secure, and scalable network
            integration solutions for the digital era.
          </p>
        </div>
      </header>

      {/* === Intro Section === */}
      <section className="network-intro">
        <div className="network-intro-content">
          <h2>
            <span>Connecting Businesses Seamlessly</span>
          </h2>
          <p>
            Our network integration services ensure seamless connectivity across
            devices, platforms, and locations. From infrastructure setup to
            security and scalability, we deliver end-to-end solutions.
          </p>
          <p>
            We help organizations modernize their IT backbone and achieve
            operational excellence through robust networking strategies.
          </p>
          <p>
            Our Comprehensive network design and structuring are essential to smooth networking. From design, development, installation, ongoing support, we offer impeccable services to our clients across industries. Our high-performance network services are focussed on implementing new and extending existing networks, up-gradation of the current applications as per the growing environment, network analysis design, and installation with minimum system disruption. Our client support team offers ongoing testing, maintenance, and monitoring for our clientele. Whether you require network cabling, VoIP solutions, fibre optics, active components installations, or complete network reliability; trust us for perfect active and passive network design solutions.
          </p>
          <p>
            An active network contains at least one voltage source or current source that can supply energy to the network indefinitely. A passive network does not contain an active source. Active elements can inject power to the circuit, provide power gain, and control the current flow within the circuit. A passive network is a type of computer network in which each node works on a predefined function or process. Passive networks don't execute any specialized code or instruction at any node and don't change their behaviour dynamically. Typically, this behaviour is related to each network router node.
          </p>
        </div>

        <div className="network-image">
          <img
            src={networkImg}
            alt="Network integration illustration"
            loading="lazy"
          />
        </div>
      </section>

      {/* === Features Section === */}
      <section className="network-features">
        <h2>Our Key Network Services</h2>
        <div className="network-grid">
          {features.map((item, index) => (
            <article className="network-card" key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="network-cta">
        <h2>Build a Stronger Network Today</h2>
        <p>
          Future-proof your business with reliable, scalable, and secure network
          integration solutions tailored to your needs.
        </p>
        <Link to="/contact" className="contact-btn">
          Get Started
        </Link>
      </section>
    </main>
  );
};

export default NetworkIntegration;
