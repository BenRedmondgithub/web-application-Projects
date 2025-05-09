import React from 'react'
import { Container, Grid, Card, CardMedia } from '@mui/material'

const portfolioItems = [
    { image: '/img/LE1.jpg' }, 
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
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        {portfolioItems.map((item, index) => (
          <Grid item sx={10} sm={8} md={8} key={index}>
            <Card sx={{
              height: 200,
              width: '100%', 
              display: 'flex', 
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <CardMedia
                component="img"
                height="800"
                image={item.image}
                sx={{
                  height: '200px',
                  width: "100%",
                  objectFit:'cover',
                }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
