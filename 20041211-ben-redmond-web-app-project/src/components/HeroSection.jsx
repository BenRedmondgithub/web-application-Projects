import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";

function HeroSection() {
  return (
    <Container maxWidth="md" style={{ textAlign: "center", padding: "4rem 0" }}>
      <Typography variant="h2" gutterBottom>
        Capturing Moments, Creating Memories
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Explore my world through the lens
      </Typography>

      <Grid container spacing={2} justifyContent="center" style={{ marginTop: "2rem" }}>
        <Grid item>
          <Button variant="contained" color="primary">View Portfolio</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="success">Buy Prints</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="error">Hire Me</Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HeroSection;
