import React from "react";
import './cartItem.css';

const CartItem = ({ id, name, quantity }) => {
  const handleDeleteClick = () => {
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    const updatedItems = items.filter(item => item.id !== id);
    localStorage.setItem("cartItems", JSON.stringify(updatedItems));
    window.location.reload();
  };

  return (
    <div className="cart-item">
      <h3>{name}</h3>
      <p>Кількість: {quantity}</p>
      <button className="delete-btn" onClick={handleDeleteClick}>Видалити</button>
    </div>
  );
};

export default CartItem;
