// src/components/myCardComponent.jsx
import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Button, Box, Typography } from '@mui/material';

const cardData = [
  {
    title: 'View Portfolio',
    image: '/Web Project/assigns/imgs/gallery-icon.png',
    link: '/Web Project/assigns/imgs/gallery-icon.png',
  },
  {
    title: 'Buy Prints',
    image: '/Web Project/assigns/imgs/Ecommerce-Buy-icon.png',
    link: '/Web Project/assigns/imgs/Ecommerce-Buy-icon.png',
  },
  {
    title: 'Hire Me',
    image: '/Web Project/assigns/imgs/10436064.png',
    link: '/Web Project/assigns/imgs/10436064.png',
  },
];

function myCardComponent() {
  return (
    <Container sx={{ py: 6 }}>
      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345, mx: 'auto' }}>
              <CardMedia
                component="img"
                height="200"
                image={card.image}
                alt={card.title}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Button
                  variant="contained"
                  color="primary"
                  href={card.link}
                  size="large"
                >
                  {card.title}
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Example Card
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Example Subtitle
          </Typography>
          <Typography variant="body2">
            Example content for the outlined card.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
