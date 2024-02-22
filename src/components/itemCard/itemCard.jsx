import React from "react";
import "./itemCard.css";
import { NavLink } from "react-router-dom";

export default function ItemCard({ name, price, id }) {
  return (
    <div className="item-card">
      <img
        src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08183651.png"
        alt={name}
        className="item-image"
      />
      <h3 className="item-name">{name}</h3>
      <p className="item-price">${price}</p>
      <button className="order-button">
        {" "}
        <NavLink to={`/`}>Замовити</NavLink>
      </button>
    </div>
  );
}
