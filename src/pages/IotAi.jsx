// src/pages/IotAi.jsx
import React from "react";
import { Link } from "react-router-dom";
import MemoryIcon from "@mui/icons-material/Memory";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SensorsIcon from "@mui/icons-material/Sensors";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

import "../styles/IotAi.css";
import iotAiImg from "../assets/iotAi.png"; // ⚡ replace with your image

// Dynamic Features Array
const features = [
  {
    icon: <DevicesOtherIcon className="iot-icon" />,
    title: "Smart Devices",
    desc: "Connect and control IoT-enabled devices across your enterprise in real-time."
  },
  {
    icon: <MemoryIcon className="iot-icon" />,
    title: "Edge Computing",
    desc: "Process data closer to devices for faster decision-making and reduced latency."
  },
  {
    icon: <PsychologyIcon className="iot-icon" />,
    title: "AI Insights",
    desc: "Leverage artificial intelligence to analyze patterns and optimize operations."
  },
  {
    icon: <SensorsIcon className="iot-icon" />,
    title: "Sensor Integration",
    desc: "Collect data seamlessly from multiple IoT sensors and platforms."
  },
  {
    icon: <AutoGraphIcon className="iot-icon" />,
    title: "Predictive Analytics",
    desc: "AI-powered forecasting to anticipate maintenance, demand, and trends."
  }
];

const IotAi = () => {
  return (
    <main className="iot-page" aria-labelledby="iot-title">
      {/* === Hero Section === */}
      <header className="iot-hero">
        <div className="iot-hero-content">
          <h1 id="iot-title">
            <span>IoT & AI Solutions</span>
          </h1>
          <p>
            Unlock the power of connectivity and intelligence with Internet of
            Things (IoT) and Artificial Intelligence (AI) solutions tailored for
            your business.
          </p>
        </div>
      </header>

      {/* === Intro Section === */}
      <section className="iot-intro">
        <div className="iot-intro-content">
          <h2>
            <span>Transform with IoT & AI</span>
          </h2>
          <p>
            Businesses today generate massive volumes of data. By combining IoT
            with AI, we help you turn raw data into actionable intelligence,
            leading to smarter operations and better customer experiences.
          </p>
          <p>
            From connected devices to advanced machine learning algorithms, our
            IoT & AI solutions scale with your business needs.
          </p>
          <p>
            Khazani Infotech Private Limited offers a holistic approach to enterprises helping them plan their IoT program in alignment with their business needs. We enable enterprises determine the most fitting IoT landscape to start with and provide rapid development of high quality solutions based on your IOT needs thereby accelerating your time to market with zero lock-in and reduced risk.
          </p>
          <p>
            Our expert solutions are:
          </p>
          <b2>
            Technology Driven
          </b2>
          <p>
            We determine the needs and pain points of a specific product line or business unit and provide potential solutions.
          </p>
          <b2>
            Business Driven
          </b2>
            <p>
              Determining needs and pain points of multiple BU’s and shaping integrated solutions throughout the business value chain.
            </p>
            <b2>
              Strategy Driven
            </b2>
            <p>
              Our experts determine the pain points and needs throughout the enterprise and shape multi-functional transformation action with IOT being the key facilitator.
            </p>
        </div>

        <div className="iot-image">
          <img
            src={iotAiImg}
            alt="IoT and AI illustration"
            loading="lazy"
          />
        </div>
      </section>

      {/* === Features Section === */}
      <section className="iot-features">
        <h2>Our IoT & AI Capabilities</h2>
        <div className="iot-grid">
          {features.map((item, index) => (
            <article className="iot-card" key={index}>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="iot-cta">
        <h2>Ready to Innovate with IoT & AI?</h2>
        <p>
          Let’s create smarter, more connected experiences for your customers
          with cutting-edge IoT and AI solutions.
        </p>
        <Link to="/contact" className="contact-btn">
          Get Started
        </Link>
      </section>
    </main>
  );
};

export default IotAi;
