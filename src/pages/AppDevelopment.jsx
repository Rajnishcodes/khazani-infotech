import React from "react";
import {
  Smartphone,
  CloudQueue,
  Code,
  Devices,
  Security,
} from "@mui/icons-material"; // ✅ MUI Icons
import "../styles/AppDevelopment.css";
import appImage from "../assets/appImage.png"; 

const AppDevelopment = () => {
  return (
    <div className="app-page">
      {/* === Hero Section === */}
      <header className="app-hero">
        <div className="app-hero-content">
          <h1>
            <span>App & Software Development</span>
          </h1>
          <p>
            Build scalable, secure, and user-friendly applications that drive
            innovation and transform your business digitally.
          </p>
        </div>
      </header>

      {/* === Intro Section === */}
      <section className="app-intro">
        <div className="app-intro-content">
          <h1>
            <span>Empowering Your Business with Technology</span>
          </h1>
          <p>
            Khazani Infotech offers a wide array of application consulting
            services to augment your enterprise and enable you to derive maximum
            business value from your technology investments. Our experienced
            team of industry experts understand your business complexities and
            provide effective, tailor-made solutions which simplify
            implementations and optimize productivity.
          </p>
          <p>
            We help enterprises in designing and deploying a comprehensive
            project plan and authenticate it for end user acceptance. Our
            holistic approach initiates with assessing your business needs based
            on which we work with you to devise a roadmap to transform your
            enterprise into a business intelligence enterprise.
          </p>
          <p>
            With a deep experience in software development, deployment, quality
            assurance, and software support, our extensive services cover the
            complete development and implementation life cycle and ensure
            enterprises of steady business workflow.
          </p>
          <p>
            Our application consulting experts help in optimizing your business
            operations and offer round the clock on-demand support to
            enterprises.
          </p>
        </div>

        {/* Image Section */}
        <div className="app-image">
          <img src={appImage} alt="App Development" />
        </div>
      </section>

      {/* === Features Section === */}
      <section className="app-features">
        <h2>Our App & Software Development Capabilities</h2>
        <div className="app-grid">
          <div className="app-card">
            <Smartphone className="app-icon" />
            <h3>Application consulting</h3>
            <p>
              Native & cross-platform apps that deliver seamless performance
              across all devices.
            </p>
          </div>

          <div className="app-card">
            <Code className="app-icon" />
            <h3>DataBase Services</h3>
            <p>
              Tailored applications built to solve your unique business
              challenges.
            </p>
          </div>

          <div className="app-card">
            <Devices className="app-icon" />
            <h3>IDM</h3>
            <p>
              Intuitive and modern user experiences designed for maximum
              engagement.
            </p>
          </div>

          <div className="app-card">
            <CloudQueue className="app-icon" />
            <h3>Mobility App & Software</h3>
            <p>
              Scalable SaaS and cloud-native applications with secure
              deployment.
            </p>
          </div>

          <div className="app-card">
            <Security className="app-icon" />
            <h3>Portal And Collaboration</h3>
            <p>
              End-to-end security and compliance with industry standards across
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="app-cta">
        <h2>Let’s Build Your Next Big App</h2>
        <p>
          Partner with us to create future-ready software solutions that bring
          your business ideas to life.
        </p>
        <button className="contact-btn">Get Started</button>
      </section>
    </div>
  );
};

export default AppDevelopment;
