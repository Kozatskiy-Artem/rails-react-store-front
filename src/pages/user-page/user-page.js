import React, { useState, useEffect } from "react";
import CustomInput from "../../components/customInput/customInput";
import "./user-page.css";
import api from "../../api";
import { useParams, useNavigate } from "react-router-dom";

const UserPage = () => {
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [role, setRole] = useState("");
  const accessToken = localStorage.getItem("accessToken");
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/users/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setFirst_name(response.data.first_name);
        setLast_name(response.data.last_name);
        setRole(response.data.role);
      } catch (error) {
        console.error("Error fetching User:", error);
      }
    };

    fetchUser();
  }, [accessToken, userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await api.put(`/users/${userId}`,{
          first_name,
          last_name,
          role
        }, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        navigate('/users');
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <div className="user-page">
      <h2>Редагування</h2>
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
        <div className="role-select">
          <label htmlFor="role">Роль:</label>
          <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="user">Юзер</option>
            <option value="admin">Адмін</option>
          </select>
        </div>
        <button type="submit">Зберегти</button>
      </form>
    </div>
  );
};

export default UserPage;
