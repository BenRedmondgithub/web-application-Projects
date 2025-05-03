import React from "react";
import { Container, Typography } from "@mui/material";

function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: "url('/img/ben-redmond-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h2" gutterBottom>
          Ben Redmond Photography
        </Typography>
        <Typography variant="h4">
          The poetry of the everyday, captured!
        </Typography>
      </Container>
    </div>
  );
}

export default HeroSection;
