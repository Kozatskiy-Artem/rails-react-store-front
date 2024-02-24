import React, { useState, useEffect } from "react";
import "./cabinet-page.css";
import CustomInput from "../../components/customInput/customInput";
import api from '../../api';

const CabinetPage = () => {
  const [editing, setEditing] = useState(false);
  const [me, setMe] = useState({});
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await api.get(
          "/users/me",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setMe(response.data);
        setFirst_name(response.data.first_name);
        setLast_name(response.data.last_name);
      } catch (error) {
        console.error("Error fetching Me:", error);
      }
    };

    fetchMe();
  }, [accessToken]);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.put(`/users/${me.id}`,{
        first_name,
        last_name,
      }, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setEditing(false);
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="user-profile">
      <h2>Персональний кабінет</h2>
      <p>Email: {me.email}</p>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <CustomInput
            label={"Ім'я"}
            placeholder={"Ім'я"}
            type="text"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
          />
          <CustomInput
            label={"Прізвище"}
            placeholder={"Прізвище"}
            type="text"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
          />
          <button type="submit">Зберегти</button>
        </form>
      ) : (
        <div>
          <p>Ім'я: {me.first_name}</p>
          <p>Прізвище: {me.last_name}</p>
          <button onClick={handleEditClick}>Редагувати</button>
        </div>
      )}
    </div>
  );
};

export default CabinetPage;
