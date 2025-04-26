import React from "react";
import "./index.css"; 
import { Container, Typography, AppBar, Toolbar, Box, Button } from "@mui/material";

function HeroSection() {
  return (
    <>
      {/* 🔒 Navbar */}
      <AppBar position="static" color="default" elevation={1}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" color="inherit" noWrap>
            Ben Redmond Photography
          </Typography>
          <Box>
            <Button color="inherit" sx={{ mx: 1 }}>
              Home
            </Button>
            <Button variant="outlined" color="primary" sx={{ mx: 1 }}>
              Shop
            </Button>
            <Button variant="outlined" color="primary" sx={{ mx: 1 }}>
              Hire
            </Button>
            <Button variant="outlined" color="primary" sx={{ mx: 1 }}>
              Portfolio
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

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
