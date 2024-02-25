import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import api from "../../api";

function Header() {
  const accessToken = localStorage.getItem("accessToken");
  const role = localStorage.getItem("role");
  const handleLogout = async () => {
    try {
      await api.post(`/users/tokens/revoke`, null, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      localStorage.clear();
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <header>
      <h1>TechStore</h1>
      <NavLink to="/">Каталог товарів</NavLink>
      <NavLink to="/cart">Кошик</NavLink>
      <div>
        {!accessToken && (
          <>
            <NavLink to="/sign-up">Зареєструватись</NavLink>
            <NavLink to="/login">Увійти</NavLink>
          </>
        )}
        {accessToken && (
          <>
            <NavLink to="/cabinet">Кабінет</NavLink>
            <NavLink to="/orders">Замовлення</NavLink>
            {role === "admin" && <NavLink to="/users">Користувачі</NavLink>}
            <button onClick={handleLogout}>Вийти</button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
