import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const cardData = [
  {
    title: 'View Portfolio',
    image: '/img/Ecommerce-Buy-icon.png',
    link: '#',
  },
  {
    title: 'Buy Prints',
    image: '/img/test.png',
    link: '#',
  },
  {
    title: 'Hire Me',
    image: '/img/hire-me.png',
    link: '#',
  },
];

function MyCardComponent() {
  return (
    <Container sx={{ py: 12 }}>
      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx=
            {{ height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              maxWidth: 345,
              mx: 'auto', 
              }}>
              
              <CardMedia
                component="img"
                height="240"
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
