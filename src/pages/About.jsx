import React from "react";
import "../styles/About.css";
import aboutImage from "../assets/aboutImage.png"; // replace with your image

const About = () => {
  return (
    <div className="about-page">
      {/* === Hero Section === */}
      <header className="about-hero">
        <div className="about-hero-content">
          <h1>
            <span>About Us</span>
          </h1>
          <p>
            At Khazani Infotech, we are passionate about creating innovative,
            scalable, and secure IT solutions that empower businesses to grow
            digitally. With years of expertise and a customer-first approach, we
            help organizations achieve operational excellence and stay ahead of
            the competition.
          </p>
        </div>
      </header>

      {/* === Intro Section === */}
      <section className="about-intro">
        <div className="about-intro-content">
          <h2>
            <span>Who We Are</span>
          </h2>
          <p>
            We are a team of technology enthusiasts, problem solvers, and
            innovators. From consulting to implementation, we partner with
            clients across industries to design tailor-made solutions that drive
            transformation.
          </p>
          <p>
            Our mission is to bridge the gap between businesses and technology
            by delivering value-driven services that enhance efficiency and
            enable long-term success.
          </p>
          <p>
            We are more than just a technology company – we are your digital growth partner. At ISB, we believe in building scalable, secure, and future-ready IT solutions that empower businesses to stay ahead in the fast-evolving digital landscape.
          </p>
          <p>
            Our mission is to empower businesses with technology that not only solves today’s problems but also unlocks tomorrow’s opportunities. We aim to bridge the gap between vision and execution by delivering impactful solutions tailored to your needs.
          </p>
        </div>

        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
      </section>

      {/* === Values Section === */}
      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Innovation</h3>
            <p>
              We embrace creativity and new ideas to deliver cutting-edge
              solutions that inspire change.
            </p>
          </div>
          <div className="value-card">
            <h3>Integrity</h3>
            <p>
              Honesty, transparency, and accountability define how we work with
              our clients and partners.
            </p>
          </div>
          <div className="value-card">
            <h3>Excellence</h3>
            <p>
              We strive for excellence in everything we do, ensuring the highest
              quality of services.
            </p>
          </div>
          <div className="value-card">
            <h3>Collaboration</h3>
            <p>
              Our team works hand-in-hand with clients to achieve shared goals
              and long-lasting impact.
            </p>
          </div>
        </div>
      </section>

      
      {/* === CTA Section === */}
      <section className="about-cta">
        <h2>Let’s Grow Together</h2>
        <p>
          Partner with Khazani Infotech to unlock digital opportunities and
          transform your business with innovation.
        </p>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
};

export default About;
