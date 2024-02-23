import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  const accessToken = localStorage.getItem("accessToken");

  return (
    <header>
      <h1>TechStore</h1>
      <NavLink to="/">Каталог товарів</NavLink>
      <div>
        {!accessToken && (
        <>
          <NavLink to="/sign-up">Зареєструватись</NavLink>
          <NavLink to="/login">Увійти</NavLink>
        </> 
        )}
        {accessToken && (
          <NavLink to="/cabinet">Кабінет</NavLink>
        )}
      </div>
    </header>
  );
}

export default Header;
