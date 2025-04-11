import React from "react";
import HeroSection from "./components/HeroSection";
import MyCardComponent from './components/FEATURED';
//import { Box, CardActions, CardContent, Button, Typography, Card } from '@mui/material'; // Import Box
// import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material'; // Import Box

function App() {
  return (
    <div>
      <HeroSection />
      <MyCardComponent />
    </div>
  );
}

export default App;