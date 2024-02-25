import React, { useState, useEffect } from "react";
import ItemCard from "../../components/itemCard/itemCard";
import "./home-page.css";
import api from "../../api";
import CustomInput from "../../components/customInput/customInput";

function HomePage() {
  const role = localStorage.getItem("role");
  const accessToken = localStorage.getItem("accessToken");
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [creating, setCreating] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get("/items");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);
  const handleSearch = async () => {
    try {
      const response = await api.get(`/items?search=${search}`);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post(
        `/items`,
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
      setCreating(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  if (creating) {
    return (
      <form onSubmit={handleSubmit} className="creating-item">
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
    );
  } else {
    return (
      <>
        <h1>Перелік товарів</h1>
        <div className="search">
          <CustomInput
            type="search"
            placeholder={"Пошук"}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Пошук</button>
          {role === "admin" && (
            <buton onClick={() => setCreating(true)}>Створити товар</buton>
          )}
        </div>
        <div className="item-list">
          {items.map((item, index) => (
            <ItemCard
              key={index}
              name={item.name}
              price={item.price}
              id={item.id}
              description={item.description}
            />
          ))}
        </div>
      </>
    );
  }
}

export default HomePage;
