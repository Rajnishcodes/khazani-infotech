// src/pages/Networking.jsx
import React from "react";
import { Link } from "react-router-dom";
import LanIcon from "@mui/icons-material/Lan";
import WifiIcon from "@mui/icons-material/Wifi";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import CloudIcon from "@mui/icons-material/Cloud";

import "../styles/Networking.css";
import networkingImg from "../assets/networking.png"; // ⚡ Replace with your image

// Dynamic Networking Features
const features = [
  {
    icon: <LanIcon className="nt-icon" />,
    title: "LAN & WAN Setup",
    desc: "Robust Local and Wide Area Networks for smooth business connectivity."
  },
  {
    icon: <WifiIcon className="nt-icon" />,
    title: "Wireless Networking",
    desc: "High-performance wireless solutions ensuring seamless mobility."
  },
  {
    icon: <SecurityIcon className="nt-icon" />,
    title: "Network Security",
    desc: "Firewalls, VPNs, and monitoring tools to safeguard your network."
  },
  {
    icon: <SpeedIcon className="nt-icon" />,
    title: "High-Speed Performance",
    desc: "Optimized bandwidth and low-latency connections for critical workloads."
  },
  {
    icon: <CloudIcon className="nt-icon" />,
    title: "Cloud Networking",
    desc: "Integration with hybrid and multi-cloud environments."
  }
];

const Networking = () => {
  return (
    <main className="nt-page" aria-labelledby="nt-title">
      {/* === Hero Section === */}
      <header className="nt-hero">
        <div className="nt-hero-content">
          <h1 id="nt-title">
            <span>Networking Solutions</span>
          </h1>
          <p>
            Building secure, scalable, and high-speed networks that keep your
            business connected 24/7.
          </p>
        </div>
      </header>

      {/* === Intro Section === */}
      <section className="nt-intro">
        <div className="nt-intro-content">
          <h2>
            <span>Reliable & Scalable Networking</span>
          </h2>
          <p>
            Our networking services ensure that your business enjoys seamless
            connectivity, advanced security, and high availability across all
            locations.
          </p>
          <p>
            From LAN, WAN, and wireless solutions to cloud integration, we offer
            comprehensive services tailored to your infrastructure needs.
          </p>
          <p>
            Our Comprehensive network design and structuring are essential to smooth networking. From design, development, installation, ongoing support, we offer impeccable services to our clients across industries. Our high-performance network services are focussed on implementing new and extending existing networks, up-gradation of the current applications as per the growing environment, network analysis design, and installation with minimum system disruption. Our client support team offers ongoing testing, maintenance, and monitoring for our clientele. Whether you require network cabling, VoIP solutions, fibre optics, active components installations, or complete network reliability; trust us for perfect active and passive network design solutions.
          </p>
          <p>
            An active network contains at least one voltage source or current source that can supply energy to the network indefinitely. A passive network does not contain an active source. Active elements can inject power to the circuit, provide power gain, and control the current flow within the circuit. A passive network is a type of computer network in which each node works on a predefined function or process. Passive networks don't execute any specialized code or instruction at any node and don't change their behaviour dynamically. Typically, this behaviour is related to each network router node.
          </p>
        </div>

        <div className="nt-image">
          <img
            src={networkingImg}
            alt="Networking Solutions"
            loading="lazy"
          />
        </div>
      </section>

      {/* === Features Section === */}
      <section className="nt-features">
        <h2>Our Networking Services</h2>
        <div className="nt-grid">
          {features.map((item, index) => (
            <article className="nt-card" key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="nt-cta">
        <h2>Need Reliable Networking Solutions?</h2>
        <p>
          Whether you need LAN, WAN, wireless, or cloud-based networking, our
          team delivers fast, secure, and reliable solutions.
        </p>
        <Link to="/contact" className="contact-btn">
          Get Connected
        </Link>
      </section>
    </main>
  );
};

export default Networking;
