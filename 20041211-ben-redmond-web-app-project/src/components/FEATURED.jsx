import React from 'react';
import { Container, Grid, Card, CardMedia,cardContent, Button } from '@mui/material';

const cardData = [ 
  {
    title: '[View Portfolio]',
    imageUrl: 'https://via.placeholder.com/300',
    description: 'Description for featured work 1',
  },
  {
    title: '[Buy Prints]',
    imageUrl: 'https://via.placeholder.com/300',
    description: 'Description for featured work 2',
  },
  {
    title: '[Hire Me]',
    imageUrl: 'https://via.placeholder.com/300',
    description: 'Description for featured work 3',
  },
];

function MyCardComponent() {
  return (

    <Container sx={{ py: 6 }}>
    <Grid con Ntainer spacing={4}> justityContent ="center">
    {cardData.map((card, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card sx={{ maxWidth: 345,mx : 'auto' }}>
          <CardMedia
            component="img"
            alt={card.title}
            height="140"
            image={card.imageUrl}
          />
          <CardContent>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <Button variant="contained" color="primary">
              {card.title}
            </Button>
          </CardContent>

          <CardContent>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <Button variant="contained" color="primary">
              {card.title}   
            </Button>
          </CardContent>

            <CardContent>
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <Button variant="contained" color="primary">
              {card.title}
            </Button>

          </CardContent>
        </Card>
      </Grid>
      </Container>
    ))}

  );
}

export default MyCardComponent;