// PortfolioSection.jsx
// src/components/PortfolioSection.jsx
import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

const portfolioItems = [
    {
      title: 'Landscapes',
      image: 'https://via.placeholder.com/400x250?text=Landscapes'
    },
    {
      title: 'Portraits',
      image: 'https://via.placeholder.com/400x250?text=Landscapes'
    },
    {
      title: 'Events',
      image: 'https://via.placeholder.com/400x250?text=Landscapes',
    },
  ];
  

function PortfolioSection() {
    return (
        <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <Container sx={{ py: 45 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Portfolio
            </Typography>
            <Grid container spacing={10} justifyContent="center">
                {portfolioItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ border: '2px solid red' }}>
                            <CardMedia
                                component="img"
                                height="200"
                                image={item.image}
                                alt={item.title}
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h6" align="center">
                                    {item.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
        </div>
    );
}

export default PortfolioSection;