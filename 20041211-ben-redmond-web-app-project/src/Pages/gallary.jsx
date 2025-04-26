import React from 'react'
import { Container, Grid, Card, CardMedia, Typography } from '@mui/material'

const portfolioItems = [
    { title: 'Dublin 1', image: '/img/porttraits.png' }, // Fixed syntax
    { title: 'Dublin 2', image: '/img/porttraits.png' },
    { title: 'Dublin 3', image: '/img/porttraits.png' },
];

export default function PortfolioPage() {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={4}>
        {portfolioItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={item.image}
                alt={item.title}
                sx={{
                    height: '400',
                    width: '100&',
                    objectFit: 'cover'
                }}
              />
              <Typography variant="h6" sx={{ mt: 2, textAlign: 'center' }}>
                {item.title}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
