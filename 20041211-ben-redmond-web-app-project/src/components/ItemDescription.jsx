import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

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

const ItemDescription = () => {
    const { id } = useParams();
    
    const product = productList.find(item => item.id === parseInt(id));

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

            <Link to={`/cart/${product.id}`} style={{ textDecoration: 'none' }}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '20px', backgroundColor: '#4CAF50', color: 'white' }}
                    onClick={() => {
                        const cartItems = JSON.parse(localStorage.getItem("Cart")) || [];
                        const exists = cartItems.find(item => item.id === product.id);
                        if (!exists) {
                            cartItems.push(product);
                            localStorage.setItem("Cart", JSON.stringify(cartItems));
                        }
                        window.location.href = `/cart/${id}`;
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