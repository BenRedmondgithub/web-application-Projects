import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button"; // Added import for Button

const Cart = () => { 
    const { id } = useParams();
    const navigate = useNavigate();
    const cartItems = JSON.parse(localStorage.getItem("Cart")) || [];

    const product = id ? cartItems.find(item => item.id === parseInt(id)) : null;

    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        localStorage.setItem("Cart", JSON.stringify(updatedCart));
        navigate('/cart');
    };

    if (id && !product) {
        return <div>Item not found in cart</div>;
    }

    const handlePayPal = () => {
        // Logic to handle PayPal payment can be added here
        console.log("thanks for your order");
        window.open("https://www.paypal.me/yournamehere", "_blank");
    }

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            {id ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <h1>{product.title}</h1>
                    <img src={product.image} alt={product.title} style={{ maxWidth: '300px' }} />
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p> 
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <Button
                            variant="contained"
                            color="#6b44ad"
                            href="https://www.paypal.me/yournamehere"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handlePayPal}
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
                                borderRadius: '5px' 
                            }}
                        >
                            Remove from Cart
                        </button>
                    </div>
                </div>
            ) : (
                <div>
                    <h1>Your Cart</h1>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        <div style={{ display: 'grid', gap: '20px' }}>
                            {cartItems.map(item => (
                                <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
                                    <div>
                                        <h2>{item.title}</h2>
                                        <p>Price: ${item.price}</p>
                                    </div>
                                    <button 
                                        onClick={() => removeFromCart(item.id)}
                                        style={{ padding: '5px 10px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px' }}
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>

    );
}

export default Cart;