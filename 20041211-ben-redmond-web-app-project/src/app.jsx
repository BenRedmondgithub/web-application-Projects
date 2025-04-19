import React from "react";
import HeroSection from "./components/HeroSection";
import MyCardComponent from './components/FEATURED';
import PortfolioSection from "./components/PortfolioSection";
import "./styles.css";
 

function App() {
  return (
    <div>
      <HeroSection />
      <MyCardComponent />
      <PortfolioSection />
      
    </div>
  );
}

export default App;