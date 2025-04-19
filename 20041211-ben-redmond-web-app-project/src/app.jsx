import React from "react";
import "./styles.css";
import HeroSection from "./components/HeroSection";
import MyCardComponent from './components/FEATURED';
import PortfolioSection from "./components/PortfolioSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/CONTACT";
import FOOTER from "./components/FOOTER";


function App() {
  return (
    <div>
      <HeroSection />
      <MyCardComponent />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
      <FOOTER />
    </div>
  );
}

export default App;