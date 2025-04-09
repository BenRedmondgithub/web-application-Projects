import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./../task-manager-app/src/pages/home.jsx";
import About from "./pages/about.jsx";
import Navbar from "./components/Navbar";
// If CssBaseline is from Material-UI, import it like this:
// import { CssBaseline } from "@mui/material";

const App = () => {
    return (
        <>
        {/* Replace <cssBaseline /> with <CssBaseline /> if using Material-UI */}
        {/* <CssBaseline /> */}
        <Navbar />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
        </>
    );
};

export default App;