import React from "react";
import CartItem from "../../components/cartItem/cartItem";
import "./cart-page.css";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const totalCost = cartItems
    .reduce((total, item) => total + item.cost, 0)
    .toFixed(2);
  const handleCreateOrder = async () => {
    const orderData = {
      amount: totalCost,
      items: cartItems.map((item) => ({
        item_id: item.id,
        quantity: item.quantity,
      })),
    };
    try {
      await api.post("/orders/", orderData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      localStorage.removeItem("cartItems");
      navigate("/orders");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="cart-page">
      <h2>Кошик</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
          />
        ))
      ) : (
        <p>Кошик порожній</p>
      )}
      {cartItems.length > 0 && (
        <>
          <h3>Разом: ${totalCost}</h3>
          {accessToken ? (
            <button className="btn" onClick={handleCreateOrder}>
              Замовити
            </button>
          ) : (
            <p>Увійдіть, щоб замовити</p>
          )}
        </>
      )}
    </div>
  );
};

export default CartPage;
