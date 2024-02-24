import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const accessToken = localStorage.getItem("accessToken");
  const role = localStorage.getItem("role");
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
          {role === "admin" && (
          <NavLink to="/users">Користувачі</NavLink>
          )}
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
