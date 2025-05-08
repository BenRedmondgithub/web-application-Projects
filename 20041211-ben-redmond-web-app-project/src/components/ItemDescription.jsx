import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import React from "react";


const productList = [
    {
        title: "Celbridge House",
        price: "€15",
        image: "/img/_MG_9418.jpg",
        description: "A beautiful photo of Celbridge House.",
        category: "celbridge"
    },
    {
        title: "Yellow Rose",
        price: "€20",
        image: "/img/roses.jpg",
        description: "A stunning yellow rose.",
        category: "misc"
    },
    {

        title: "Dublin Docklands",
        price: "€20",
        image: "/img/dublin.jpg",
        description: "A scenic view of Dublin Docklands.",
        category: "dublin"
    },
    {
        title: "Through the Trees",
        price: "€15",
        image: "/img/Untitled+(3).jpg",
        description: "A serene view through the trees.",
        category: "dublin"
    }
];

const ItemDescription = () => {
    const { category } = useParams();
    
    const product = productList.find(item => item.category === category);

    if (!product) {
        return <div>Item not found</div>;
    }

    return (
        <div>
            <Box sx={{ display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '2px' }}
            >
            <Typography variant="h1">
                {product.title}
            </Typography>

            <Box
                component="img"
                src={product.image}
                alt={product.title}
                sm={{ 
                width: "20%",
                height: "auto",
                marginBottom: 2,
                borderRadius: 2,
                }}
            />
            <Typography variant="h5" gutterBottom>
                {product.description}           
            </Typography>

            <Typography variant="h5" gutterBottom>
                Price : {product.price}
            </Typography>

            <Link to={`/cart/${product.category}`} style={{ textDecoration: 'none' }}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '20px', backgroundColor: '#4CAF50', color: 'white' }}
                    onClick={() => {
                        const cartItems = JSON.parse(localStorage.getItem("Cart")) || [];
                        const exists = cartItems.find(item => item.category === product.category);
                        if (!exists) {
                            cartItems.push(product);
                            localStorage.setItem("Cart", JSON.stringify(cartItems));
                        }
                    }}
                >
                    Add to Cart
                </Button>
            </Link>

            </Box>

        </div>
    );
};

export default ItemDescription;