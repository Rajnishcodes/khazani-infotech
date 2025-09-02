import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

// Import your new page
import DigitalTransformation from "./pages/DigitalTransformation";
import Contact from "./pages/Contact";
import AppDevelopment from "./pages/AppDevelopment";
import ManagedServices from "./pages/ManagedServices";
import AuthorizedService from "./pages/AuthorizedService";
import ProfessionalService from "./pages/ProfessionalService";
import ClientSideComputing from "./pages/ClientSideComputing";
import CloudSolution from "./pages/CloudSolution";
import NetworkIntegration from "./pages/NetworkIntegration";
import DataCenterSecurity from "./pages/DataCenterSecurity";
import IotAi from "./pages/IotAi";
import Computer from "./pages/Computer";
import DataCenter from "./pages/DataCenter";
import Networking from "./pages/Networking";
import Home from "./pages/Home";
import About from "./pages/About";
import Analytics from "./Read/Analytics";
import CaseStudy from "./pages/CaseStudy";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
            </>
          }
        />

        {/* Digital Transformation route */}
        <Route path="/digitaltransformation" element={<DigitalTransformation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appdevelopment" element={<AppDevelopment />} />
        <Route path="/managedservices" element={<ManagedServices />} />
        <Route path="/authorizedservice" element={<AuthorizedService />} />
        <Route path="/professionalservice" element={<ProfessionalService />} />
        <Route path="/clientsidecomputing" element={<ClientSideComputing />} />
        <Route path="/cloudsolution" element={<CloudSolution />} />
        <Route path="/networkintegration" element={<NetworkIntegration />} />
        <Route path="/datacentersecurity" element={<DataCenterSecurity />} />
        <Route path="/iotai" element={<IotAi />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/datacenter" element={<DataCenter />} />
        <Route path="/networking" element={<Networking />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/casestudy" element={<CaseStudy />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
