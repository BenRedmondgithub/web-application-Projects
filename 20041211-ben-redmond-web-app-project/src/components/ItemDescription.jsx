import React from "react";
import { useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const productList = [
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
    {   id: "riverbank",
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

const ItemDescription = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const product = productList.find(item => item.id === id);

    if (!product) {
        return <div>Item not found</div>;
    }

    const cartItems = JSON.parse(localStorage.getItem("Cart")) || [];

    const handlePayPal = () => {
        // Logic to handle PayPal payment can be added here
        console.log("thanks for your order");
        window.open("https://www.paypal.me/yournamehere", "_blank");
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        localStorage.setItem("Cart", JSON.stringify(updatedCart));
        navigate('/cart');
    };

    return (
        <div>
            <Box sx={{ display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '2px' }}
            >
            <Typography variant="h1" 
            sx={{
                fontFamily: "'Dancing Script', cursive",
            }}>
                {product.title}
            </Typography>

            <Box
                component="img"
                src={product.image}
                alt={product.title}
                sx={{ 
                width: "20%",
                height: "auto",
                marginBottom: 2,
                borderRadius: 2,
                }}
            />
            <Typography variant="h5" gutterBottom sx={{
                fontFamily: "'Reenie Beanie', cursive",
                fontSize: "2.5rem",
            }}>
                {product.description}           
            </Typography>

            <Typography variant="h5" gutterBottom 
            sx={{
                fontFamily: "'Reenie Beanie', cursive",
                fontSize: "2.5rem",
            }}>
                Price : {product.price}
            </Typography>

            <Button
                variant="contained"
                color="primary"
                href="https://www.paypal.me/yournamehere"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handlePayPal}
                sx={{
                    fontFamily: "'Reenie Beanie', cursive",
                    fontSize: "3rem",
                }}
                >
                Pay with PayPal
            </Button>
                    <button 
                    onClick={() => removeFromCart(product.id)}
                    style={{ 
                    padding: '10px 20px', 
                    backgroundColor: '#f44336', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '5px',
                    fontFamily: "'Reenie Beanie', cursive",
                    fontSize: '1.5rem',
                    }}>

                    Remove from Cart
            </button>

            </Box>

        </div>
    );
};

export default ItemDescription;

