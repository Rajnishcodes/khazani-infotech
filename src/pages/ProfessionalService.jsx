// src/pages/ProfessionalService.jsx
import React from "react";
import { Link } from "react-router-dom";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InsightsIcon from "@mui/icons-material/Insights";
import EngineeringIcon from "@mui/icons-material/Engineering";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import "../styles/ProfessionalService.css";
import serviceImg from "../assets/professionalService.png"; // ⚡ replace with your image

// Features list (dynamic)
const features = [
  {
    icon: <BusinessCenterIcon className="professional-icon" />,
    title: "Enterprise Solutions",
    desc: "End-to-end business solutions designed to optimize workflows and improve efficiency."
  },
  {
    icon: <InsightsIcon className="professional-icon" />,
    title: "Data-Driven Insights",
    desc: "Transform business decisions with actionable insights powered by analytics."
  },
  {
    icon: <EngineeringIcon className="professional-icon" />,
    title: "Technical Expertise",
    desc: "Access certified professionals with deep technical knowledge across industries."
  },
  {
    icon: <PeopleAltIcon className="professional-icon" />,
    title: "Project Management",
    desc: "Tailored solutions crafted around your unique business requirements."
  },
  {
    icon: <TrendingUpIcon className="professional-icon" />,
    title: "Scalable Growth",
    desc: "Future-proof services built to support sustainable business growth."
  }
];

const ProfessionalService = () => {
  return (
    <main className="professional-page" aria-labelledby="professional-title">
      {/* === Hero Section === */}
      <header className="professional-hero">
        <div className="professional-hero-content">
          <h1 id="professional-title">
            <span>Professional Service Solutions</span>
          </h1>
          <p>
            Delivering expert-driven, reliable, and scalable services to help
            your business achieve excellence.
          </p>
        </div>
      </header>

      {/* === Intro Section === */}
      <section className="professional-intro">
        <div className="professional-intro-content">
          <h2>
            <span>Expertise That Drives Success</span>
          </h2>
          <p>
            Our Professional Services are designed to help businesses leverage
            cutting-edge technology and strategic insights. From enterprise
            consulting to scalable solutions, we empower organizations to stay
            competitive and future-ready.
          </p>
          <p>
            Partner with our experienced consultants and technical experts to
            streamline operations, enhance productivity, and unlock new
            opportunities.
          </p>
          <p>
            We are engaged in the business of giving expert advice to people working in the Information Technology field.
          </p>
          <p>
            At a high level, We, leading IT consultants provide guidance to customers on everything from overall IT strategy – including what to house in the data center versus in the cloud; to the type of technology and functionality needed within the context of our customer’s IT and business environments and goals.
          </p>
        </div>

        <div className="professional-image">
          <img
            src={serviceImg}
            alt="Professional business service"
            loading="lazy"
          />
        </div>
      </section>

      {/* === Features Section === */}
      <section className="professional-features">
        <h2>Why Choose Our Professional Services?</h2>
        <div className="professional-grid">
          {features.map((item, index) => (
            <article className="professional-card" key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="professional-cta">
        <h2>Ready to Take Your Business to the Next Level?</h2>
        <p>
          Get in touch with our experts today and unlock the full potential of
          Professional Services tailored to your goals.
        </p>
        <Link to="/contact" className="contact-btn">
          Connect with Experts
        </Link>
      </section>
    </main>
  );
};

export default ProfessionalService;
