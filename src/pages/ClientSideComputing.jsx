// src/pages/ClientSideComputing.jsx
import React from "react";
import { Link } from "react-router-dom";
import DevicesIcon from "@mui/icons-material/Devices";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import SyncAltIcon from "@mui/icons-material/SyncAlt";

import "../styles/ClientSideComputing.css";
import clientComputing from "../assets/clientComputing.png"; // ⚡ replace with actual image

// Features list (dynamic)
const features = [
  {
    icon: <DevicesIcon className="client-icon" />,
    title: "Cross-Platform Access",
    desc: "Seamless computing across devices with full compatibility and flexibility."
  },
  {
    icon: <CloudQueueIcon className="client-icon" />,
    title: "Cloud Integration",
    desc: "Leverage client-side apps that integrate directly with cloud-based platforms."
  },
  {
    icon: <SecurityIcon className="client-icon" />,
    title: "Enhanced Security",
    desc: "Strong authentication and encryption to safeguard sensitive user data."
  },
  {
    icon: <SpeedIcon className="client-icon" />,
    title: "Optimized Performance",
    desc: "Lightweight applications designed for speed and smooth user experience."
  },
  {
    icon: <SyncAltIcon className="client-icon" />,
    title: "Real-Time Synchronization",
    desc: "Instant updates and live data sync across all connected devices."
  }
];

const ClientSideComputing = () => {
  return (
    <main className="client-page" aria-labelledby="client-title">
      {/* === Hero Section === */}
      <header className="client-hero">
        <div className="client-hero-content">
          <h1 id="client-title">
            <span>Client-Side Computing</span>
          </h1>
          <p>
            Empowering businesses and users with efficient, secure, and scalable
            client-side computing solutions.
          </p>
        </div>
      </header>

      {/* === Intro Section === */}
      <section className="client-intro">
        <div className="client-intro-content">
          <h2>
            <span>Future-Ready Client Solutions</span>
          </h2>
          <p>
            Client-side computing enables businesses to deliver high-performance
            applications directly on end-user devices, ensuring faster
            processing, improved security, and seamless experiences.
          </p>
          <p>
            With cloud-powered integrations and modern frameworks, we make
            client-side computing smarter, scalable, and business-ready.
          </p>
          <p>
            A thin client is a computer that runs from resources stored on a central server instead of a localized hard drive. Thin clients work by connecting remotely to a server-based computing environment where most applications, sensitive data, and memory, are stored.
          </p>
          <p>
            Although the term thin client usually refers to software, it is increasingly used for computers, such as network computers and Net PCs, that are designed to serve as the clients for client/server architectures.
          </p>
          <p>
            In desktop & works stations, data is stored local system whereas, in thin clients, the data is stored in a central data storage server.
          </p>
          <p>
            There are pros and cons of thin clients. We advise our clients to choose the right solution for their needs depending on the business requirements.
          </p>
        </div>

        <div className="client-image">
          <img
            src={clientComputing}
            alt="Client-side computing illustration"
            loading="lazy"
          />
        </div>
      </section>

      {/* === Features Section === */}
      <section className="client-features">
        <h2>Why Choose Client-Side Computing?</h2>
        <div className="client-grid">
          {features.map((item, index) => (
            <article className="client-card" key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="client-cta">
        <h2>Bring Client-Side Power to Your Business</h2>
        <p>
          Ready to leverage client-side computing for speed, scalability, and
          user-focused performance? Let’s get started today.
        </p>
        <Link to="/contact" className="contact-btn">
          Get Started
        </Link>
      </section>
    </main>
  );
};

export default ClientSideComputing;
