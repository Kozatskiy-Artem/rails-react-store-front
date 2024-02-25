import React, { useState, useEffect } from "react";
import "./item-page.css";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api";
import CustomInput from "../../components/customInput/customInput";

function ItemPage() {
  const role = localStorage.getItem("role");
  const accessToken = localStorage.getItem("accessToken");
  let { itemId } = useParams();
  const [item, setItem] = useState({});
  const [editing, setEditing] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await api.get(`/items/${itemId}`);
        setItem(response.data);
        setName(response.data.name);
        setDescription(response.data.description);
        setPrice(response.data.price);
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
    navigate("/cart");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.put(
        `/items/${itemId}`,
        {
          name,
          description,
          price,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setEditing(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  const handleDeleteItem = async () => {
    try {
      await api.delete(`/items/${itemId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      navigate("/");
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      {editing ? (
        <form onSubmit={handleSubmit} className="editing-item">
          <CustomInput
            label={"Назва"}
            placeholder={"Назва"}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CustomInput
            label={"Опис"}
            placeholder={"Опис"}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <CustomInput
            label={"Ціна"}
            placeholder={"Ціна"}
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">Зберегти</button>
        </form>
      ) : (
        <>
          {role === "admin" && (
            <div className="buttons">
              <button className="edit-btn" onClick={() => setEditing(true)}>
                Редагувати
              </button>
              <button className="delete-btn" onClick={handleDeleteItem}>
                Видалити
              </button>
            </div>
          )}
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
        </>
      )}
    </>
  );
}

export default ItemPage;
