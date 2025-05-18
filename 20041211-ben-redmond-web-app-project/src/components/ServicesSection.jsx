import React from "react";

import { Container, Typography, Grid, Card, CardContent, CardActions, Box, CardMedia } from "@mui/material";
import { blue } from "@mui/material/colors";

const services = [
    {
        title: "Portrait Shoots",
        description: "Creating stunning portraits for individuals and families.",
        price: "€150",
        image:"/img/Ving.jpg"
    },
    {
        title: "Event Photography",
        description: "Crafting beautiful memories of your special events.",
        price: "€200",
        image:"/img/Crafting.jpg"
    },
    {
        title: "Landscape Photography",
        description: "Capturing the beauty of nature in stunning detail.",
        price: "€200",
        image:"/img/dublin.jpg"
    },
];

function ServicesSection() { 
    return ( 
        <Container sx={{ py:8}}>
            <Typography variant="h5" align="center" gutterBottom
            sx={{
            color: "white", 
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", 
            fontFamily: "'Reenie Beanie', cursive",
            fontSize: "5rem",
            }}>
                Services
            </Typography>
            <Grid container spacing={10} justifyContent="center">
                {services.map((service, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{
                            height: '100%',
                            backgroundColor: blue,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            maxWidth: 345,
                            mx: 'auto', 
                        }}>
                            <CardMedia
                                component="img"
                                height="240"
                                image={service.image}
                                alt={service.title}
                            />
                            <CardContent>
                                <Typography variant="h5" align="center"
                                    sx={{ fontFamily: "'Dancing Script', cursive", color: 'black', fontSize: "2rem" }}>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" align="center"
                                sx={{ fontFamily: "'Reenie Beanie', cursive", color: 'black', fontSize: "1.9rem" }}>
                                    {service.description}
                                </Typography>
                            </CardContent>
                            <CardActions 
                            sx={{ 
                                justifyContent: "center", 
                                fontFamily: "'Reenie Beanie', cursive", 
                                color: 'black', 
                                fontSize: "1.9rem"}}>
                                <Box component="span" sx={{ fontWeight: 'bold' }}>
                                    {service.price}
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ServicesSection;
