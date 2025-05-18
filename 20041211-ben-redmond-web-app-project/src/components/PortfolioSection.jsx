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
        <div style={{ backgroundColor: '#f5f5f5',  }}>
        <Container>
            <Typography variant="h3" align="center" gutterBottom 
            sx={{ 
                fontFamily: "'Dancing Script', cursive", 
                fontSize: "8rem" 
                }}>
                Portfolio
            </Typography>
            <Grid container spacing={8} justifyContent="center">
                {portfolioItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={6} key={index}>
                        <Card sx={{ 
                            height: '93%', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            fontFamily: "'Reenie Beanie', cursive", 
                            fontSize: "2rem" }}>
                        
                            <CardMedia
                                component="img"
                                height="300"
                                width="100%"
                                borderRadius="5px"
                                image={item.image}
                                alt={item.title}
                                sx={{objectFit: 'cover',
                                }}
                            />
                            <CardContent sx={{ textAlign: 'center', }}>
                            <Typography variant='h3' gutterBottom sx={{fontFamily: "'Reenie Beanie', cursive", color: 'black'}} >
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
                sx={{ mt: 9, mb: 10, display: 'flex', justifyContent: 'center', mx: 'auto', fontFamily: "'Reenie Beanie', cursive", 
                fontSize: "2rem",
                }}
                component={Link} to="/portfolio"
            >
                View Portfolio
            </Button>

        </Container>
        </div>
    );
}

export default PortfolioSection;

