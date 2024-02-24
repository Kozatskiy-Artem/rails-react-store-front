import React, { useState, useEffect } from "react";
import OrderItem from "../../components/orderItem/orderItem";
import { useParams } from "react-router-dom";
import api from "../../api";

const accessToken = localStorage.getItem("accessToken");

const OrderPage = () => {
  let { orderId } = useParams();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await api.get(`/orders/${orderId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setOrder(response.data);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    fetchItem();
  }, [orderId]);

  return (
    <div className="cart-page">
      <h2>Замовлення № {order.id}</h2>
      <h3>Разом: ${order.amount}</h3>
      {order.orders_descriptions &&
        order.orders_descriptions.map((item) => (
          <OrderItem
            key={item.id}
            id={item.item.id}
            name={item.item.name}
            quantity={item.quantity}
            price={item.item.price}
          />
        ))}
    </div>
  );
};

export default OrderPage;
