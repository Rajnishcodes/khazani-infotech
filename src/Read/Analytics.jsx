import React from "react";
import {
  Assessment,
  BarChart,
  PieChart,
  TrendingUp,
  ShowChart,
  Timeline,
} from "@mui/icons-material"; // ✅ MUI Icons
import "./Analytics.css";
import analyticsImage from "../assets/analyticsImage.png"; // Replace with actual asset

const Analytics = () => {
  return (
    <div className="analytics-page">
      {/* === Hero Section === */}
      <header className="analytics-hero">
        <div className="analytics-hero-content">
          <h1>
            <span>Analytics & Business Intelligence</span>
          </h1>
          <p>
            Unlock the power of your data with actionable insights, advanced
            reporting, and predictive analytics to drive smarter business
            decisions.
          </p>
        </div>
      </header>

      {/* === Intro Section === */}
      <section className="analytics-intro">
        <div className="analytics-intro-content">
          <h1>
            <span>Transform Data Into Actionable Insights</span>
          </h1>
          <p>
            At Khazani Infotech, we help organizations harness the power of
            analytics to gain a competitive edge. From real-time dashboards to
            predictive modeling, our solutions empower you with data-driven
            decision-making capabilities.
          </p>
          <p>
            Our expert team specializes in implementing scalable BI solutions
            that enable seamless integration across your enterprise systems. We
            ensure accuracy, efficiency, and real-time insights that transform
            raw data into strategic assets.
          </p>
        </div>

        {/* Image Section */}
        <div className="analytics-image">
          <img src={analyticsImage} alt="Analytics" />
        </div>
      </section>

      {/* === Features Section === */}
      <section className="analytics-features">
        <h2>Our Analytics & BI Capabilities</h2>
        <div className="analytics-grid">
          <div className="analytics-card">
            <Assessment className="analytics-icon" />
            <h3>Data Visualization</h3>
            <p>
              Create interactive dashboards with real-time KPIs and metrics for
              smarter decisions.
            </p>
          </div>

          <div className="analytics-card">
            <BarChart className="analytics-icon" />
            <h3>Advanced Reporting</h3>
            <p>
              Automated reports tailored for different departments and business
              functions.
            </p>
          </div>

          <div className="analytics-card">
            <PieChart className="analytics-icon" />
            <h3>Predictive Analytics</h3>
            <p>
              Use machine learning and AI models to forecast trends and business
              outcomes.
            </p>
          </div>

          <div className="analytics-card">
            <TrendingUp className="analytics-icon" />
            <h3>Performance Monitoring</h3>
            <p>
              Monitor operational efficiency and identify growth opportunities
              in real-time.
            </p>
          </div>

          <div className="analytics-card">
            <ShowChart className="analytics-icon" />
            <h3>Big Data Solutions</h3>
            <p>
              Harness big data technologies to manage, process, and analyze
              large datasets.
            </p>
          </div>

          <div className="analytics-card">
            <Timeline className="analytics-icon" />
            <h3>Data Governance</h3>
            <p>
              Ensure compliance, accuracy, and security across all business
              intelligence processes.
            </p>
          </div>
        </div>
      </section>

      {/* === CTA Section === */}
      <section className="analytics-cta">
        <h2>Turn Data Into Your Competitive Advantage</h2>
        <p>
          Partner with us to implement analytics solutions that maximize ROI,
          streamline operations, and boost growth.
        </p>
        <button className="contact-btn">Get Started</button>
      </section>
    </div>
  );
};

export default Analytics;
