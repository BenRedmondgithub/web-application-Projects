import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import MyCardComponent from "./components/FEATURED"; // 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function HeroSection() {
  return (
    <div style={{ backgroundImage: "url('/path/to/your/image.jpg')", backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
      <div style={{ backgroundColor: "rgb(158, 226, 231)", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <Container maxWidth="md" style={{ textAlign: "center", padding: "3.2rem 0" }}>
      <Typography variant="h1" gutterBottom>
        Ben Redmond Photography
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      The poetry of the everyday, captured.
      </Typography>
      </Container>
      </div>

      <Grid container spacing={2} justifyContent="center" style={{ marginTop: "2rem" }}>
        <Grid item>
          <Button variant="contained" color="success">View Portfolio</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="success">Buy Prints</Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color="success">Hire Me</Button>
        </Grid>
      </Grid>
    </div>
  );
}

function MyCardComponent() {
  return (
    <div>
    <MyCardComponent/>
  </div>
);

}

export default HeroSection;