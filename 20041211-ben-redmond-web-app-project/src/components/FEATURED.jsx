// src/components/myCardComponent.jsx
import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const cardData = [
  {
    title: 'View Portfolio',
    image: 'public/assets/img/Ecommerce-Buy-icon.png',
    link:  '#',
  },
  {
    title: 'Buy Prints',
    image: 'https://via.placeholder.com/400x250?text=Landscapes',
    link: '#',
  },
  {
    title: 'Hire Me',
    image: 'https://via.placeholder.com/400x250?text=Landscapes',
    link: '#',
  },
];

function MyCardComponent () {
  return (
    <Container sx={{ py: 100 }}>
      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xl={12} sm={6} md={4} key={index}>
            <Card xl={{ maxWidth: 345, mx: 'auto' }}>
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


export default MyCardComponent;