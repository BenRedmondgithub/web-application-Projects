import { useParams } from "react-router-dom";

const Cart = () => { 
    const { id } = useParams();
    const cartItems = JSON.parse(localStorage.getItem("Cart")) || [];

    const product = id ? cartItems.find(item => item.id === parseInt(id)) : null;

    if (id && !product) {
        return <div>Item not found in cart</div>;
    }

    return (
        <div>
            {id ? (
                <>
                    <h1>{product.title}</h1>
                    <img src={product.image} alt={product.title} />
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p> 
                    <button>Pay Pal</button>
                    <button>Remove from Cart</button>
                </>
            ) : (
                <>
                    <h1>Your Cart</h1>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                        cartItems.map(item => (
                            <div key={item.id}>
                                <h2>{item.title}</h2>
                                <p>Price: {item.price}</p>
                            </div>
                        ))
                    )}
                </>
            )}
        </div>
    );
}