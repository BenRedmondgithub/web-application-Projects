// src/components/myCardComponent.jsx
import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const cardData = [
  {
    title: 'View Portfolio',
    image: './src/20041211-ben-redmond-web-app-project/assigns/imgs/portfolio.png',
    link: '',
  },
  {
    title: 'Buy Prints',
    image: '/Web Project/assigns/imgs/prints.png',
    link: '/Web Project/assigns/imgs/prints.png',
  },
  {
    title: 'Hire Me',
    image: '/Web Project/assigns/imgs/hire.png',
    link: '/Web Project/assigns/imgs/prints.png',
  },
];

function MyCardComponent () {
  return (
    <Container sx={{ py: 6 }}>
      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
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