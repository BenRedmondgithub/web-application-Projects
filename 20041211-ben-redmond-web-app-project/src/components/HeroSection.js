
// This is a React component that serves as a hero section for a photography website.
// It uses Material-UI for styling and layout. The component displays a title and a subtitle within a container.
import React from "react";
// Ensure the CSS file exists or remove the import if unnecessary
// import "./index.css"; 
import { Container, Typography } from "@mui/material";

function HeroSection() {
  return (
    <div className="hero-section">
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom>
          Ben Redmond Photography 
        </Typography>
        <Typography variant="h6">
          The poetry of the everyday, captured! 📸 
        </Typography>
      </Container>
    </div>
  );
}

export default HeroSection;