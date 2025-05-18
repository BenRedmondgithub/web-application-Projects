import React from "react";
import {Container, Typography} from "@mui/material";
import "../App.css";

function HeroSection() {return (
    <div
      style={{
        backgroundImage: "url('/img/ben-redmond-hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h1" gutterBottom
          sx={{ color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", fontFamily: "'Dancing Script', cursive",
            fontSize: "8rem", }}
        >
          Ben Redmond Photography
        </Typography>
        
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: "white", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", fontFamily: "'Reenie Beanie', cursive",
            fontSize: "4rem", }}
        >
          The poetry of the everyday, captured!
        </Typography>
      </Container>
    </div>
  );
}

export default HeroSection;
