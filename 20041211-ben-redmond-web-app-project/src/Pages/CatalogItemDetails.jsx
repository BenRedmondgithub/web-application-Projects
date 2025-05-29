import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";

// Catalog items data
const catalogItems = [
    {
        title: "Dublin",
        key: "dublin",
        description: "Urban landmarks of Dublin.",
        image: "/img/dublin.jpg",
    },
    {
        title: "Celbridge",
        key: "celbridge",
        description: "Capturing the beauty of Celbridge.",
        image: "/img/Untitled+(10).jpg",
    },
    {
        key: "landscape",
        title: "Miscellaneous",
        description: "A grab bag of images.",
        image: "/img/flowers.jpg",
    },
];

// CatalogItemDetails component to display details of a catalog item
function CatalogItemDetails() {
    const { key } = useParams();
    const item = catalogItems.find((item) => item.key === key);

// If the item is not found, display a message
    if (!item) {
        return (
            <Container>
                <Typography variant="h4" align="center" gutterBottom>
                    Item not found
                </Typography>
            </Container>
        );
    }
    // Render the details of the catalog item
    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                {item.title}
            </Typography>
            <img src={item.image} alt={item.title} 
            style={{ 
            width: "100%", 
            maxHeight: "400px", 
            objectFit: "cover" }} />
            
            <Typography variant="body1" align="center" gutterBottom>
                {item.description}
            </Typography>
        
        </Container>
    );
}

export default CatalogItemDetails;


