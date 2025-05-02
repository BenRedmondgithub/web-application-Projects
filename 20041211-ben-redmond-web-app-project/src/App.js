import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup.jsx";
import Navbar from "./components/Navbar.jsx";
import GalleryPage from "./Pages/GalleryPage.jsx";
import HireMe from "./Pages/Hire.jsx";
import Shop from "./Pages/Shop.jsx";
import Login from "./Pages/login.jsx";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import PrintShopSection from "./components/PrintShopSection";
import ItemDescription from "./components/ItemDescription.jsx";
import ServicesSection from "./components/ServicesSection";
import ContactSection  from "./components/CONTACT";
import FOOTER from "./components/FOOTER.jsx";
//                                     {item.price}
 

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
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/HireMe" element= {<HireMe/>} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/product/:id" element={<ItemDescription/>} />
     </Routes>
    </Router>
  );
}

export default App;

