import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import GalleryPage from "./Pages/GalleryPage.jsx";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import PrintShopSection from "./components/PrintShopSection";
import ServicesSection from "./components/ServicesSection";
import ContactSection  from "./components/CONTACT";
import FOOTER from "./components/FOOTER"; 
import Login from "./Pages/login.jsx";


function HomePage() {

  return (
    <div>
      <HeroSection />
      <PortfolioSection />
      <PrintShopSection />
      <ServicesSection />
      <ContactSection />
      <FOOTER />
    </div>
  );
}

function App() 
{
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<GalleryPage/>} />
        <Route path="/login" element={<Login/>} />
     </Routes>
    </Router>
  );
}

export default App;

