import React from "react";
import HeroSection from "./components/HeroSection"; // adjust path if needed
import MyCardComponent from "./components/FEATURED"; // adjust path if needed
import PortfolioSection from "./components/PortfolioSection";
import PrintShopSection from "./components/PrintShopSection";
import ServicesSection from "./components/ServicesSection"; // adjust path if needed

function App() {

  return (
    <div>
      <HeroSection />
      <MyCardComponent />
      <PortfolioSection />
      <PrintShopSection />
      <ServicesSection />
    </div>
  );
}



export default App;

