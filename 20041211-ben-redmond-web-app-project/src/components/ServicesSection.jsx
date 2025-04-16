import React from "react";

import { Container, Typography, Grid, Card, CardContent, CardActions, Box, CardMedia } from "@mui/material";

const services = [
    {
        title: "Portrait Shoots",
        description: "Creating stunning portraits for individuals and families.",
        price: "€150",
        image:"assets/camera icons/portrait.png"
    },
    {
        title: "Event Photography",
        description: "Crafting beautiful memories of your special events.",
        price: "€200",
        image:"#"
    },
    {
        title: "Landscape Photography",
        description: "Capturing the beauty of nature in stunning detail.",
        price: "€200",
        image:"#"
    },
];

function ServicesSection() { 
    return ( 
        <Container sx={{ py: 8 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Services
            </Typography>
            <Grid container spacing={10} justifyContent="center">
                {services.map((service, index) => (
                    <Grid item xl={12} sm={6} md={4} key={index}>
                        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                            <CardMedia 
                                component="img"
                                height="200"
                                image="/public/free-round-flat-male-portrait-avatar-user-icon-png-701751695032786rubzjpxmv7.png"
                                alt={service.title}
                            />
                                <Typography variant="h5" align="center">
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" align="center">
                                    {service.description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: "center" }}>
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
// Compare this snippet from 20041211-ben-redmond-web-app-project/src/components/HeroSection.jsx:
