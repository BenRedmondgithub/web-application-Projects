import React from "react";
import "./index.css"; 
import { Container, Typography } from "@mui/material";

function HeroSection() {
  return (
    <div className="hero-section">
      <Container maxWidth="xl">
        <Typography variant="h2" gutterBottom>
          Ben Redmond Photography
        </Typography>
        <Typography variant="h6">
          The poetry of the everyday, captured.
        </Typography>
      </Container>
    </div>
  );
}

export default HeroSection;
