import React from 'react'
import { Container, Grid, Card, CardMedia, Typography } from '@mui/material'

const portfolioItems = [
    { title: 'Dublin 1', image: '/img/LE1.jpg' }, // Fixed syntax
    { title: 'Dublin 2', image: '/img/_MG_7366.jpg' },
    { title: 'Dublin 3', image: '/img/_MG_7709.jpg' },
    { title: 'Dublin 4', image: '/img/_MG_9418.jpg' },
    { title: 'Dublin 5', image: '/img/roses.jpg' },
    { title: 'Dublin 6', image: '/img/streets.jpg' },
];

export default function PortfolioPage() {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        {portfolioItems.map((item, index) => (
          <Grid item xs={12} sm={7} md={7} key={index}>
            <Card sx={{height: 550, display: 'flex', flexDirection: 'column'}} >
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
                sx={{
                  height: '450px',
                  width: '100%',
                  objectFit: 'contain',
                  '&:hover': {
                    transform: 'scale(1.07)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              />
              <Typography variant="h6" sx={{ mt: 'auto', textAlign: 'center', py: 2 }}>
                {item.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
