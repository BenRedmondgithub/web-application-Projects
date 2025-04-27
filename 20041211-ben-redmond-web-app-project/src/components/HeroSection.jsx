import React from "react";
import "./index.css"; 
import { Container, Typography, AppBar, Toolbar, Box, Button } from "@mui/material";

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <Container maxWidth="xl" sx={{ mt: 2 }}>
          <Typography variant="h2" gutterBottom>
            Ben Redmond Photography
          </Typography>
          <Typography variant="h4">
            The poetry of the everyday, captured!
          </Typography>
        </Container>
      </div>
    </>
  );
}

export default HeroSection;
