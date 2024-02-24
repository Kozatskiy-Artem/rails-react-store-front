import React from "react";
import "./userCard.css";
import { NavLink } from "react-router-dom";
import api from "../../api";

const UserCard = ({ id, email, first_name, last_name, role }) => {
  const accessToken = localStorage.getItem("accessToken");

  const handleDeleteUser = async () => {
    try {
      await api.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.error("Error deleting Users:", error);
    }
  };
  return (
    <div className="user-card">
      <h3>{email}</h3>
      <p>
        {first_name} {last_name}
      </p>
      <h3>{role}</h3>
      <NavLink to={`/users/${id}`}>Редагувати</NavLink>
      <button onClick={handleDeleteUser}>Видалити</button>
    </div>
  );
};

export default UserCard;
