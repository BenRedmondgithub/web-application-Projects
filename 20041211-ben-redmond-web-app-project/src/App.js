import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Pages/Signup.jsx";
import Navbar from "./components/Navbar.jsx";
import GalleryPage from "./Pages/GalleryPage.jsx";
import HireMe from "./Pages/Hire.jsx";
import Shop from "./Pages/Shop.jsx";
import Login from "./Pages/login.jsx";
import Cart from "./components/Cart.jsx";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import PrintShopSection from "./components/PrintShopSection";
import ItemDescription from "./components/ItemDescription.jsx";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/CONTACT";
import FOOTER from "./components/FOOTER.jsx";

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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<GalleryPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hireme" element={<HireMe />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<ItemDescription />} />
        <Route path="/cart/:id" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;

