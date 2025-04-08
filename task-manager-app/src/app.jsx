import React from "react";
import { BrowserRouter, Route, Router, Router } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { cssBaseline } from "./styles/globalStyles";



const App = () => {
    return (
        <>
        <cssBaseline/>
        <Navbar/>
        <Routes> 
        <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
        </Router>
        </Routes>
        </>
    );

};

export default App; 