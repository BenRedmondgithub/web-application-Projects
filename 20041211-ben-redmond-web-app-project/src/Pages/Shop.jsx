import React from 'react';
import { Container, Typography,Grid, Card, CardContent, CardActions, Box, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const ShopItems = [
    {
        title: "Celbridge House",
        price: "€15",
        image:"/img/_MG_9418.jpg"
    },
    {
        title: "Yellow Rose",
        price: "€20",
        image:"/img/roses.jpg"
    },
    {
        title: "Dublin Docklands",	
        price: "€20",
        image:"/img/dublin.jpg"
    },
    {
        title: "Through the Trees",
        price: "€15",
        image:"/img/Untitled+(3).jpg"
    },
    {
        title: "The Riverbank",
        price: "€15",
        image:"/img/Untitled+(2) (1).jpg"
    },
    {
        title: "A Nice View",
        price: "€20",
        image:"/img/flowers.jpg"
    },

];


function Shop() {
    return (
        <Container maxWidth="md" sx={{ mt: 20 }}>
            <Typography variant='h3' marginBottom={5} >Shop</Typography>
            <Typography variant="h5" gutterBottom>Purchase prints of my work</Typography>
            <Typography variant="h6" gutterBottom>All prints are 20x30cm and printed on high quality paper</Typography>
            <Grid container spacing={10} justifyContent="center">
                {ShopItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            maxWidth: 345,
                            mx: 'auto', 
                        }}>
                            <CardMedia
                                component="img"
                                height="240"
                                image={item.image}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography variant="h5" align="center">
                                    {item.title}
                                </Typography>
                            </CardContent>
                            <CardActions 
                            sx={{
                                width: '90%', 
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: 2,
                                pb: 2, 
                                }}>

                                <Box component="span" sx={{ fontWeight: 'bold' }}>
                                    {item.price}
                                </Box>
                                <Link to={`/product/${index}`} style={{ textDecoration: 'none', width: '100%' }}>
                                    <Button variant="contained" color="primary" fullWidth>
                                        View Details
                                    </Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );

    
}


export default Shop;
