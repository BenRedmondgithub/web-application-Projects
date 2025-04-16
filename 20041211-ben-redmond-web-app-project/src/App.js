import React from "react";
import HeroSection from "./components/HeroSection";
import MyCardComponent from "./components/FEATURED"; 
import PortfolioSection from "./components/PortfolioSection";
import PrintShopSection from "./components/PrintShopSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection  from "./components/CONTACT"; 

function App() {

  return (
    <div>
      <HeroSection />
      <MyCardComponent />
      <PortfolioSection />
      <PrintShopSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}



export default App;

