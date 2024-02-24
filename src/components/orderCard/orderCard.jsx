import React from "react";
import "./orderCard.css";
import { NavLink } from "react-router-dom";

const OrderCard = ({ id, amount }) => (
  <div className="order-item">
    <h3>Замовлення #{id}</h3>
    <p>Разом: ${amount}</p>
    <NavLink to={`/orders/order/${id}`} className="btn-details">
      Переглянути
    </NavLink>
  </div>
);

export default OrderCard;
