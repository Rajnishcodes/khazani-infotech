// src/pages/AuthorizedService.jsx
import React from "react";
import { Link } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import SecurityIcon from "@mui/icons-material/Security";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import UpdateIcon from "@mui/icons-material/Update";

import "../styles/AuthorizedService.css";
import authorizedService from "../assets/authorizedService.png"; // ⚡ replace with your image

// Features list (dynamic)
const features = [
  {
    icon: <VerifiedIcon className="authorized-icon" />,
    title: "Certified Repairs",
    desc: "All repairs are handled by authorized professionals using genuine parts."
  },
  {
    icon: <BuildCircleIcon className="authorized-icon" />,
    title: "Warranty Support",
    desc: "Seamless handling of warranty claims and coverage extensions."
  },
  {
    icon: <SecurityIcon className="authorized-icon" />,
    title: "Trusted Quality",
    desc: "Secure, reliable, and transparent service with complete documentation."
  },
  {
    icon: <SupportAgentIcon className="authorized-icon" />,
    title: "24/7 Assistance",
    desc: "Round-the-clock customer care and technical support availability."
  },
  {
    icon: <UpdateIcon className="authorized-icon" />,
    title: "Quick Turnaround",
    desc: "Faster service times with priority handling for critical issues."
  }
];

const AuthorizedService = () => {
  return (
    <main className="authorized-page" aria-labelledby="authorized-title">
      {/* === Hero Section === */}
      <header className="authorized-hero">
        <div className="authorized-hero-content">
          <h1 id="authorized-title">
            <span>Authorized Service Solutions</span>
          </h1>
          <p>
            Get reliable, authorized, and warranty-compliant support from our
            certified service experts.
          </p>
        </div>
      </header>

      {/* === Intro Section === */}
      <section className="authorized-intro">
        <div className="authorized-intro-content">
          <h2>
            <span>Trusted & Certified Service Excellence</span>
          </h2>
          <p>
            We are a solitary purpose of responsibility for multivendor equipment supplies and support, IT Support and Enterprise IT Management administrators. Our Multi-Vendor Support Services (MVSS) empowers clients to get backing and administrations of the eminent brands just as our own products/services.
          </p>
          <p>
            Our Multi-Vendor Support decreases the time and effort by smoothing out issue recognizable proof and goal over your current circumstance. IT staff of our clients will invest less energy in planning numerous support agreements and additional time on basic business needs. You will take full advantage of your current framework by more viably dealing with your gear lifecycle, carrying productivity to planning, and decreasing IT unpredictability.
          </p>
          <p>
            At Khazani Infotech, we provide authorized service solutions
            recognized by leading OEMs. From certified repairs to warranty
            claims and round-the-clock support, our services are designed to
            give you peace of mind and ensure business continuity.
          </p>
          <p>
            With our extensive expertise and certified team, we guarantee secure,
            transparent, and high-quality services that comply with industry
            standards.
          </p>
        </div>

        <div className="authorized-image">
          <img
            src={authorizedService}
            alt="Authorized service center support"
            loading="lazy"
          />
        </div>
      </section>

      {/* === Features Section === */}
      <section className="authorized-features">
        <h2>Why Choose Our Authorized Services?</h2>
        <div className="authorized-grid">
          {features.map((item, index) => (
            <article className="authorized-card" key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="authorized-cta">
        <h2>Need Authorized Support?</h2>
        <p>
          Contact us today and get reliable, certified, and warranty-approved
          solutions tailored to your needs.
        </p>
        <Link to="/contact" className="contact-btn">
          Get Authorized Help
        </Link>
      </section>
    </main>
  );
};

export default AuthorizedService;
