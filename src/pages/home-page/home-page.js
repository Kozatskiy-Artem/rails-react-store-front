import React from "react";
import ItemCard from "../../components/itemCard/itemCard";
import "./home-page.css";

function HomePage() {
  const items = [
    {
      name: "Lenovo laptop",
      price: 2000,
      id: 1,
    },
    {
      name: "HP desktop",
      price: 1500,
      id: 2,
    },
    {
      name: "Apple MacBook Air",
      price: 2500,
      id: 3,
    },
    {
      name: "Dell Inspiron",
      price: 1800,
      id: 4,
    },
    {
      name: "Asus ROG gaming laptop",
      price: 2200,
      id: 5,
    },
    {
      name: "Microsoft Surface Pro",
      price: 1900,
      id: 6,
    },
    {
      name: "Acer Chromebook",
      price: 1200,
      id: 7,
    },
    {
      name: "Samsung Galaxy Book",
      price: 2100,
      id: 8,
    },
    {
      name: "Huawei MateBook",
      price: 2300,
      id: 9,
    },
    {
      name: "LG Gram",
      price: 1700,
      id: 10,
    },
    {
      name: "Razer Blade gaming laptop",
      price: 2800,
      id: 11,
    },
    {
      name: "Lenovo ThinkPad",
      price: 2000,
      id: 12,
    },
  ];

  return (
    <>
      <h1>Перелік товарів</h1>
      <div className="item-list">
        {items.map((item, index) => (
          <ItemCard
            key={index}
            name={item.name}
            price={item.price}
            id={item.id}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
