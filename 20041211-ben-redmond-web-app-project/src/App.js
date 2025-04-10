import React from "react";
import HeroSection from "./components/HeroSection"; // adjust path if needed
import MyCardComponent from "./components/FEATURED.jsx"; // adjust path if needed

function App() {
  return (
    <div>
      <HeroSection />
      {<MyCardComponent />}
    </div>
  );
}

export default App;