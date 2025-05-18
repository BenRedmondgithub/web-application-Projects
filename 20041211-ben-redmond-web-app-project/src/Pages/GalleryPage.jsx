import React from 'react'
import { Grid, Card, CardMedia, Box, Typography } from '@mui/material'
import '../App.css'; // Import your CSS file

const portfolioItems = [
    { image: '/img/_MG_7366.jpg' },
    { image: '/img/_MG_7709.jpg' },
    { image: '/img/_MG_9418.jpg' },
    { image: '/img/roses.jpg' },
    { image: '/img/streets.jpg'},
    { image: '/img/Untitled+(10).jpg'},
    { image: '/img/Untitled+(3).jpg'},
    { image: '/img/Untitled+(12).jpg'},
    { image: '/img/Untitled+(15).jpg'},
    { image: '/img/Untitled+(2) (1).jpg'},
];

export default function PortfolioPage() {
  return (
    <Box sx={{ 
      minHeight: "100vh", 
      px: 2,
      pt: 10,
      pb: 6,
     }}>

      <Typography variant="h1" gutterBottom
        sx={{ color: "black", 
          textShadow: "5px 5px 8px rgba(124, 124, 124, 0.7)", 
          fontFamily: "'Reenie Beanie', cursive",
          fontSize: "10rem", 
          textAlign: "center",}}>

        Portfolio
      
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        {portfolioItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 1, boxShadow: 'none'}}>
              <CardMedia
                component="img"
                image={item.image}
                alt={`Portfolio item ${index + 1}`}
                sx={{
                  width: "100%",
                  height: 250,
                  objectFit: "cover",
                  border: "5px solid black",
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


