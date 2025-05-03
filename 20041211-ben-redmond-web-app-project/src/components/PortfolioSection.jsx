import React from 'react';
import { Button, Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';

const portfolioItems = [
    {
      title: 'Landscapes',
      image: '/img/Land.png'
    },
    {
      title: 'Portraits',
      image: '/img/porttraits.png'
    },
    {
      title: 'Events',
      image: '/img/dancing.jpg',
    },
  ];
  

function PortfolioSection() {
    return (
        <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <Container sx={{ py: 15 }}>
            <Typography variant="h3" align="center" gutterBottom>
                Portfolio
            </Typography>
            <Grid container spacing={10} justifyContent="center">
                {portfolioItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="300"
                                image={item.image}
                                alt={item.title}
                                sx={{objectFit: 'cover'}}
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                            <Typography>
                                {item.title}
                            </Typography>    
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button
                align="center"
                display="center"
                variant="contained"
                color="secondary"
                size="large"
                sx={{ mt: 9, mb: 10, display: 'flex', justifyContent: 'center', mx: 'auto' }}
                component={Link} to="/portfolio"
            >
                View Portfolio
            </Button>

        </Container>
        </div>
    );
}

export default PortfolioSection;