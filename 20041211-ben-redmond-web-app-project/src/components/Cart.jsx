import { useParams, useNavigate } from "react-router-dom";

const Cart = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Logic for handling checkout
    console.log("Proceeding to checkout...");
    navigate("/checkout");
  };

  return (
    <div>
      <h1>Cart</h1>
      <p>Item ID: {id}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
}

export default Cart;