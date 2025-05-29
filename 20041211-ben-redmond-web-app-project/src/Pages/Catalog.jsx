import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Grid, Card, CardContent, CardActions, CardMedia } from "@mui/material";
import { Button } from "@mui/material";

// Catalog items data
const catalogItems = [
    {
        title: "Dublin",
        key: "dublin",
        description: "Urban landmarks of Dublin.",
        image:"/img/dublin.jpg",
        category: "dublin"
    },
    {
        title: "Celbridge",
        key: "celbridge",
        description: "Capturing the beauty of Celbridge.",
        image:"/img/Untitled+(10).jpg",
        category: "celbridge"
    },
    {
        title: "Miscellaneous",
        key: "misc",
        description: "A grab bag of images.",
        image:"/img/flowers.jpg",
        category: "misc"
    },
];

// Catalog component to display the catalog items

function Catalog() { 

    const navigate = useNavigate(); // Use useNavigate hook to programmatically navigate

    const handleViewDetails = (key) => {
        navigate(`/shop?category=${key}`); // Navigate to the CatalogItemDetails page with the selected category key
    };


    return ( 
        <Container sx={{ py:10 }}>
            <Typography variant="h4" align="center" gutterBottom 
            sx={{  
                fontFamily: "'Dancing Script', cursive",
                color: '#000000', 
                mb: 4,
                fontSize: "4rem",
            }}>
                Photo Catalog
            </Typography>
            <Typography variant="h4" align="center" gutterBottom 
            sx={{  
                color: '#000000', 
                mb: 4, 
                fontFamily: "'Reenie Beanie', cursive",
                fontSize: "3.5rem",
            }}>
                Explore Our Collection
            </Typography>
            
            <Grid container spacing={1} justifyContent="center">
                {catalogItems.map((category, index) => ( // Map through catalog items to create a card for each category
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{
                            fontFamily: "'Reenie Beanie', cursive",
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
                                image={category.image}
                                alt={category.title}
                            />
                            
                            <CardContent>
                                <Typography variant="h5" align="center"
                                    sx={{ fontFamily: "'Dancing Script', cursive", color: 'black', fontSize: "3rem" }}>
                                    {category.title}
                                </Typography>
                                <Typography variant="body2" align="center"
                                sx={{ fontFamily: "'Reenie Beanie', cursive", color: 'black', fontSize: "2.5rem" }}>
                                    {category.description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button variant="contained" sx={{fontFamily: "'Reenie Beanie', cursive", fontSize: "1.8rem"}}
                                color="primary" 
                                onClick={() => handleViewDetails(category.key)}
                                 >
                                    View {category.title} 
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Catalog;