import React, {useState, useEffect} from "react";
import ItemCard from "../../components/itemCard/itemCard";
import "./home-page.css";
import api from '../../api';

function HomePage() {
  const [items, setItems] = useState([]);

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
