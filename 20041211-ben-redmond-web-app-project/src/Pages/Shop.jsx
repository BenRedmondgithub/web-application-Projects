import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardActions, Box, CardMedia, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ShopItems = [
    {
        id: "celbridgehouse",
        title: "Celbridge House",
        price: "€15",
        image: "/img/_MG_9418.jpg",
        description: "A beautiful photo of Celbridge House.",
        category: "celbridge"
    },
    {
        id: "yellowrose",
        title: "Yellow Rose",
        price: "€20",
        image: "/img/roses.jpg",
        description: "A stunning yellow rose.",
        category: "misc"
    },
    {
        id: "dublindocklands",
        title: "Dublin Docklands",
        price: "€20",
        image: "/img/dublin.jpg",
        description: "A scenic view of Dublin Docklands.",
        category: "dublin"
    },
    {   
        id: "throughthetrees",
        title: "Through the Trees",
        price: "€15",
        image: "/img/Untitled+(3).jpg",
        description: "A serene view through the trees.",
        category: "dublin"
    },
    {   
        id: "riverbank",
        title: "The Riverbank",
        price: "€15",
        image: "/img/Untitled+(2) (1).jpg",
        description: "A peaceful riverbank scene.",
        category: "celbridge"
    },
    {
        id: "aniceview",
        title: "A Nice View",
        price: "€20",
        image: "/img/flowers.jpg",
        description: "A beautiful view of flowers.",
        category: "misc"
    },
];

function Shop() {
    const query = useQuery();
    const selectedCategory = query.get("category"); 
    const filteredItems = selectedCategory
        ? ShopItems.filter(item => item.category === selectedCategory)
        : ShopItems; 

    return (
        <Container maxWidth="md" sx={{ mt: 10 }}>
            <Typography variant='h4' marginBottom={1} 
            sx={{
                fontFamily: "'Dancing Script', cursive",
                color: 'black',
                fontSize: "4rem",
            }} 
            >Shop</Typography>
            <Typography variant="h5" gutterBottom
            sx={{
                fontFamily: "'Reenie Beanie', cursive",
                fontSize: "2.5rem",
            }} >Purchase prints of my work</Typography>
            <Typography variant="h6" gutterBottom
            sx={{
                fontFamily: "'Reenie Beanie', cursive",
                fontSize: "2.1rem",
            }} >
                All prints are 20x30cm and printed on high quality paper
            </Typography>
            {selectedCategory && (
                <Typography variant="h4" align="center" gutterBottom
                sx={{
                    fontFamily: "'Reenie Beanie', cursive", }} >
                    {`Selected Category: ${selectedCategory}`}
                </Typography>
            )}

            <Grid container spacing={5} justifyContent="center">
                {filteredItems.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            maxWidth: 345,
                            mx: 'auto',
                            fontFamily: "'Reenie Beanie', cursive",
                            fontSize: "2.1rem",
                        }}>
                            <CardMedia
                                component="img"
                                height="240"
                                image={item.image}
                                alt={item.title}
                            />
                            <CardContent>
                                <Typography variant="h5" align="center"
                                    sx={{ fontFamily: "'Dancing Script', cursive", fontSize: "2rem" }}>
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
                                    fontFamily: "'Reenie Beanie', cursive",
                                    fontSize: "2.1rem", 
                                }}
                            >
                                <Box component="span" sx={{ fontWeight: 'bold' }}>
                                    {item.price}
                                </Box>
                                <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', width: '100%' }}>
                                    <Button variant="contained" color="primary" fullWidth
                                        sx={{ fontFamily: "'Reenie Beanie', cursive", fontSize: "1.5rem" }}>
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
