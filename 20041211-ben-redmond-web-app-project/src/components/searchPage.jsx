import React, { useState } from "react";
import { TextField, Grid, Card, CardMedia, CardContent, Typography, Button,  } from "@mui/material";
import { Link } from "react-router-dom";

const SearchPage = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const productList = [
        {
            id: 0,
            title: "Celbridge House",
            price: "€15",
            image: "/img/_MG_9418.jpg",
            description: "A beautiful photo of Celbridge House."
        },
        {
            id: 1,
            title: "Yellow Rose",
            price: "€20",
            image: "/img/roses.jpg",
            description: "A stunning yellow rose."
        },
        {
            id: 2,
            title: "Dublin Docklands",
            price: "€20",
            image: "/img/dublin.jpg",
            description: "A scenic view of Dublin Docklands."
        },
        {
            id: 3,
            title: "Landscape Photography",
            price: "€200",
            image: "/img/elementor-placeholder-image.webp",
            description: "A breathtaking landscape photograph."
        }
    ];

    const filteredproducts = productList.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            <TextField
                label="Search"
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: '20px' }}
            />
            <Grid container spacing={2}>
                {filteredproducts.map((item) => (
                    <Grid item xs={12} sm={6} md={4} key={item.id}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="240"
                                image={item.image}
                                alt={item.title}
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ textAlign: 'center' }}>
                                <Typography variant="h5">{item.title}</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                                <Typography variant="h6">{item.price}</Typography>
                                <Link to={`/product/${item.id}`} style={{ textDecoration: 'none', width: '100%' }}>
                                    <Button variant="contained" color="primary" fullWidth>
                                        View Details
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default SearchPage;
