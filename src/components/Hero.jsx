// src/components/Hero.jsx
import React from "react";
import { 
  FaLaptopCode, 
  FaHandsHelping, 
  FaChartBar,
  FaCloud,
  FaDatabase,
  FaShieldAlt,
  FaServer,
  FaNetworkWired,
  FaKey,
  FaLock,
  FaProjectDiagram,
  FaThumbsUp,
  FaRocket,
  FaShieldAlt as FaGuarantee,
  FaUserTie
} from "react-icons/fa";
import { Link } from "react-router-dom";
import BroadcomLogo from "../assets/broadcomLogo.png";
import AwsLogo from "../assets/awsLogo.png";
import AzureLogo from "../assets/azureLogo.png";
import MicrosoftLogo from "../assets/microsoftLogo.png";
import "../styles/Hero.css";

const Hero = () => {
  const services = [
    { icon: <FaChartBar />, title: "Analytics", desc: "Turn data into insights with advanced analytics and reporting solutions." },
    { icon: <FaDatabase />, title: "Backup", desc: "Reliable backup and recovery solutions to safeguard your critical business data." },
    { icon: <FaCloud />, title: "Cloud", desc: "Cloud migration, deployment, and management tailored to your business needs." },
    { icon: <FaServer />, title: "Data Center", desc: "Efficient data center solutions to manage storage, servers, and operations." },
    { icon: <FaProjectDiagram />, title: "FMS", desc: "Facility Management Services for smooth IT operations and support." },
    { icon: <FaLaptopCode />, title: "Infrastructure", desc: "Robust IT infrastructure planning, deployment, and monitoring services." },
    { icon: <FaNetworkWired />, title: "Network", desc: "Seamless networking solutions for connectivity, performance, and reliability." },
    { icon: <FaShieldAlt />, title: "Security", desc: "Comprehensive cybersecurity solutions to protect your digital assets." },
    { icon: <FaKey />, title: "Software Licensing", desc: "Authorized licensing services for all major enterprise software solutions." },
    { icon: <FaLock />, title: "Virtualization", desc: "Optimize IT resources with virtualization solutions for servers and desktops." },
  ];

  const chooseUs = [
    { icon: <FaThumbsUp />, title: "98% of Satisfied Clients" },
    { icon: <FaRocket />, title: "Quick Response Time" },
    { icon: <FaGuarantee />, title: "100% Guarantee" },
    { icon: <FaUserTie />, title: "Personal Consultation" },
  ];

  const partnership = [
    { logo: MicrosoftLogo, name: "Microsoft Cloud Solution Provider" },
    { logo: BroadcomLogo, name: "Broadcom Partner" },
    { logo: AwsLogo, name: "AWS Partner Network" },
    { logo: AzureLogo, name: "Azure Partner" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Welcome To <span>Khazani Infotech</span>
            </h1>
            <p>
              We build scalable, secure and efficient platforms tailored to your growth.
              Our team of experts is dedicated to delivering innovative IT solutions that drive success.
              From cloud services to DevOps, we have you covered.
              Join us in transforming your digital landscape. 
              Let's build the future together!
              <span> Hi We are waiting for you </span>
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Get Started</button>
              <Link to="/contact">
                <button className="btn-outline">Book a Free Demo</button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <div className="services-section-text">
        <h1>Services</h1>
      </div>
      <section className="services-section">
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <div className="chooseus-section-text">
        <h1>Why Choose Us</h1>
      </div>
      <section className="chooseus-section">
        <div className="chooseus-container">
          {chooseUs.map((item, index) => (
            <div className="chooseus-card" key={index}>
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Our Partnerships Section */}
      <div className="partnership-section-text">
        <h1>Our Partnerships</h1>
      </div>
      <section className="partnership-section">
        <div className="partnership-container">
          {partnership.map((partner, index) => (
            <div className="partnership-card" key={index}>
              <img src={partner.logo} alt={partner.name} />
              <p>{partner.name}</p>
            </div>
          ))}
        </div>  
      </section>
    </>
  );
};

export default Hero;
