import React from "react";
import ItemCard from "../../components/itemCard/itemCard";
import "./home-page.css";

function HomePage() {
  const items = [
    {
      name: "Lenovo laptop",
      price: 2000,
      id: 1,
      description: "Powerful laptop from Lenovo suitable for both work and entertainment."
    },
    {
      name: "HP desktop",
      price: 1500,
      id: 2,
      description: "Desktop computer by HP, ideal for home or office use."
    },
    {
      name: "Apple MacBook Air",
      price: 2500,
      id: 3,
      description: "Sleek and lightweight laptop from Apple, perfect for on-the-go productivity."
    },
    {
      name: "Dell Inspiron",
      price: 1800,
      id: 4,
      description: "Reliable laptop by Dell, suitable for everyday tasks."
    },
    {
      name: "Asus ROG gaming laptop",
      price: 2200,
      id: 5,
      description: "High-performance gaming laptop by Asus, designed for serious gamers."
    },
    {
      name: "Microsoft Surface Pro",
      price: 1900,
      id: 6,
      description: "Versatile 2-in-1 device from Microsoft, perfect for professionals."
    },
    {
      name: "Acer Chromebook",
      price: 1200,
      id: 7,
      description: "Budget-friendly Chromebook by Acer, great for basic computing tasks."
    },
    {
      name: "Samsung Galaxy Book",
      price: 2100,
      id: 8,
      description: "Sleek and powerful laptop from Samsung, suitable for work and entertainment."
    },
    {
      name: "Huawei MateBook",
      price: 2300,
      id: 9,
      description: "Stylish and powerful laptop by Huawei, ideal for professionals."
    },
    {
      name: "LG Gram",
      price: 1700,
      id: 10,
      description: "Ultralight laptop from LG, perfect for frequent travelers."
    },
    {
      name: "Razer Blade gaming laptop",
      price: 2800,
      id: 11,
      description: "Premium gaming laptop by Razer, offering top-notch performance and design."
    },
    {
      name: "Lenovo ThinkPad",
      price: 2000,
      id: 12,
      description: "Business-grade laptop from Lenovo, known for its durability and performance."
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
            description={item.description}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
