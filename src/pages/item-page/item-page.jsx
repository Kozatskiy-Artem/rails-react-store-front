import React, { useState, useEffect } from "react";
import "./item-page.css";
import { useParams } from 'react-router-dom';
import api from "../../api";

function ItemPage() {
  let { itemId } = useParams();
  const [item, setItem] = useState({}); 
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await api.get(`/items/${itemId}`);
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItem();
  }, [itemId]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value));
  };

  const handleAddToCart = () => {
    const newItem = {
      id: item.id,
      name: item.name,
      quantity: quantity,
      cost: quantity * item.price,
    };
    const items = JSON.parse(localStorage.getItem("cartItems")) || [];
    items.push(newItem);
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  return (
    <div className="item-page">
      <div className="item-details">
        <h1>{item.name}</h1>
        <img
          src="https://ssl-product-images.www8-hp.com/digmedialib/prodimg/lowres/c08183651.png"
          alt={item.name}
          className="item-image"
        />
        <p className="item-price">${item.price}</p>
        <p className="description">{item.description}</p>
      </div>
      <div className="quantity-input">
        <label htmlFor="quantity">Кількість:</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={quantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Додати у кошик
        </button>
      </div>
    </div>
  );
}

export default ItemPage;
