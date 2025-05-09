import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Grid, Card, CardContent, CardActions, CardMedia } from "@mui/material";
import { Button } from "@mui/material";


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

function Catalog() { 

    const navigate = useNavigate(); 

    const handleViewDetails = (key) => {
        navigate(`/shop?category=${key}`);
    };

    return ( 
        <Container sx={{ py:10 }}>
            <Typography variant="h4" align="center" gutterBottom 
            sx={{ fontWeight: 'bold' 
            , color: '#000000', mb: 4, textTransform: 'uppercase'
            }}>
                Photo Catalog
            </Typography>
            <Typography variant="h4" align="center" gutterBottom
            sx={{ 
                fontWeight: 'bold' , 
                color: '#000000', 
                mb: 4, 
                textTransform: 'uppercase'
            }}>
                Explore Our Collection
            </Typography>
            
            <Grid container spacing={10} justifyContent="center">
                {catalogItems.map((category, index) => (
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
                                image={category.image}
                                alt={category.title}
                            />
                            <CardContent>
                                <Typography variant="h5" align="center">
                                    {category.title}
                                </Typography>
                                <Typography variant="body2" align="center">
                                    {category.description}
                                </Typography>
                            </CardContent>
                            <CardActions sx={{ justifyContent: 'center' }}>
                                <Button variant="contained"
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