import React from 'react';
import { Container, Typography,Grid, Card, CardContent, CardActions, Box, CardMedia, Button } from '@mui/material';

const ShopItems = [
    {
        title: "Portrait Shoots",
        price: "€150",
        image:"/img/Ving.jpg"
    },
    {
        title: "Event Photography",
        price: "€200",
        image:"/img/Crafting.jpg"
    },
    {
        title: "Landscape Photography",
        price: "€200",
        image:"/img/dublin.jpg"
    },
];


function Shop() {
    return (
        <Container maxWidth="md" sx={{ mt: 15 }}>
            <Typography variant="h1" gutterBottom>Shop</Typography>
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
                                <Button variant="contained" color="primary" fullWidth>
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Shop;