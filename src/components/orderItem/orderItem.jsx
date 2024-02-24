import React from "react";
import './orderItem.css';
import { NavLink } from "react-router-dom";

const OrderItem = ({ id, name, quantity, price }) => {

  return (
    <div className="order-item">
      <h3><NavLink to={`/item/${id}`}>{name}</NavLink></h3>
      <p>Кількість: {quantity}</p>
      <p>${price}</p>
    </div>
  );
};

export default OrderItem;
