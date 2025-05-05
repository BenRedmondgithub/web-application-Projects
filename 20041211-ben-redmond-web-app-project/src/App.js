import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./Pages/Signup.jsx";
import Navbar from "./components/Navbar.jsx";
import GalleryPage from "./Pages/GalleryPage.jsx";
import HireMe from "./Pages/Hire.jsx";
import Shop from "./Pages/Shop.jsx";
import SearchPage from "./components/searchPage.jsx";
import Login from "./Pages/login.jsx";
import Cart from "./components/Cart.jsx";
import Logout from "./Pages/logout.jsx";
import HeroSection from "./components/HeroSection.jsx";
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
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    try {
      return !!JSON.parse(localStorage.getItem("user"));
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const syncAuth = () => {
      try {
        setIsAuthenticated(!!JSON.parse(localStorage.getItem("user")));
      } catch {
        setIsAuthenticated(false);
      }
    };
    window.addEventListener("storage", syncAuth);
    return () => window.removeEventListener("storage", syncAuth);
  }, []);

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<GalleryPage />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/signup" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/hireme" element={<HireMe />} />
        <Route path="/shop" element={isAuthenticated ? <Shop /> : <Navigate to="/login" />} />
        <Route path="/product/:id" element={<ItemDescription />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart/:id" element={<Cart />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;