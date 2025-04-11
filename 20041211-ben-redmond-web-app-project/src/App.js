import React from "react";
import HeroSection from "./components/HeroSection"; // adjust path if needed
import MyCardComponent from "./components/FEATURED.jsx"; // adjust path if needed
import { Box, CardActions, CardContent, Button, Typography, Card } from '@mui/material'; // Import Box

function App() {
  const cardData = [
    
    {
      title: 'View Portfolio',
      image: '/Web Project/assigns/imgs/portfolio.png',
      link: '/Web Project/assigns/imgs/portfolio.png',
    },

    {
      title: 'Buy Prints',
      image: '/Web Project/assigns/imgs/prints.png',
      link: '/Web Project/assigns/imgs/prints.png',
    },

    {
      title: 'Hire Me',
      image: '/Web Project/assigns/imgs/hire.png',
      link: '/Web Project/assigns/imgs/hire.png',
    },
  ];

  return (
    <div>
      <HeroSection />
      <MyCardComponent />
    </div>
  );
}

export default App;

