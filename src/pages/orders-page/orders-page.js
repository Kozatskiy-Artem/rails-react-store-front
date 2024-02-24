import React, {useState, useEffect} from 'react';
import OrderCard from '../../components/orderCard/orderCard';
import './orders-page.css';
import api from '../../api';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await api.get("/orders/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchItems();
  }, [accessToken]);


  return (
  <div className="orders-page">
    <h2>Ваші замовлення</h2>
    {orders.length > 0 ? (
      orders.map((order) => (
        <OrderCard
          key={order.id}
          id={order.id}
          amount={order.amount}
        />
      ))
    ) : (
      <p>У вас поки немає замовлень</p>
    )}
  </div>
)};

export default OrdersPage;
