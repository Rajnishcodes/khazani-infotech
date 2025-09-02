import React from "react";
import {
  BusinessCenter,
  Lightbulb,
  TrendingUp,
  People,
  CheckCircle,
  Timeline,
} from "@mui/icons-material"; // ✅ MUI Icons
import "../styles/CaseStudy.css";
import caseStudyImage from "../assets/caseStudyImage.png"; // Replace with actual asset

const CaseStudy = () => {
  return (
    <div className="case-study-page">
      {/* === Hero Section === */}
      <header className="case-study-hero">
        <div className="case-study-hero-content">
          <h1>
            <span>Case Studies & Success Stories</span>
          </h1>
          <p>
            Discover how we’ve helped businesses across industries overcome
            challenges, innovate with technology, and achieve measurable growth.
          </p>
        </div>
      </header>

      {/* === Intro Section === */}
      <section className="case-study-intro">
        <div className="case-study-intro-content">
          <h1>
            <span>Real Results, Real Impact</span>
          </h1>
          <p>
            Every organization has unique goals and challenges. At Khazani
            Infotech, we partner with our clients to deliver tailored solutions
            that create long-lasting business value. Our case studies highlight
            the success stories of businesses that embraced digital
            transformation with us.
          </p>
          <p>
            From startups to enterprises, our proven approach combines strategy,
            innovation, and execution to drive measurable outcomes and set new
            benchmarks in their industries.
          </p>
          <p>
            Every organization faces unique challenges, whether it’s scaling operations, optimizing customer experiences, or driving digital transformation. At Khazani Infotech, we work hand-in-hand with clients to deliver measurable impact through custom strategies and innovative technology solutions.
          </p>
        </div>

        {/* Image Section */}
        <div className="case-study-image">
          <img src={caseStudyImage} alt="Case Study" />
        </div>
      </section>

      {/* === Case Study Highlights === */}
      <section className="case-study-features">
        <h2>What Our Case Studies Highlight</h2>
        <div className="case-study-grid">
          <div className="case-study-card">
            <BusinessCenter className="case-study-icon" />
            <h3>Industry Challenges</h3>
            <p>
              Explore the unique challenges our clients faced across diverse
              industries.
            </p>
          </div>

          <div className="case-study-card">
            <Lightbulb className="case-study-icon" />
            <h3>Innovative Solutions</h3>
            <p>
              Learn how we applied cutting-edge technologies and strategies to
              solve complex problems.
            </p>
          </div>

          <div className="case-study-card">
            <TrendingUp className="case-study-icon" />
            <h3>Growth & ROI</h3>
            <p>
              See the measurable business outcomes and ROI our clients achieved
              with our help.
            </p>
          </div>

          <div className="case-study-card">
            <People className="case-study-icon" />
            <h3>Client Collaboration</h3>
            <p>
              Understand how we worked closely with stakeholders to ensure
              success and adoption.
            </p>
          </div>

          <div className="case-study-card">
            <CheckCircle className="case-study-icon" />
            <h3>Proven Results</h3>
            <p>
              Real-world case studies backed by facts, numbers, and measurable
              outcomes.
            </p>
          </div>

          <div className="case-study-card">
            <Timeline className="case-study-icon" />
            <h3>Future Roadmaps</h3>
            <p>
              How our solutions set the stage for future innovation and
              scalability.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="case-study-cta">
        <h2>Ready to Write Your Success Story?</h2>
        <p>
          Partner with Khazani Infotech and let us help you overcome challenges,
          innovate, and grow with confidence.
        </p>
        <button className="contact-btn">Get Started</button>
      </section>
    </div>
  );
};

export default CaseStudy;
