import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
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
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
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
        </div>
    );
};

export default ItemDescription;