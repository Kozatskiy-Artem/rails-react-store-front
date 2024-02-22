import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>TechStore</h1>
      <NavLink to="/">Каталог товарів</NavLink>
      <div>
        <NavLink to="/sign-up">Зареєструватись</NavLink>
        <NavLink to="/login">Увійти</NavLink>
        <NavLink to="/cabinet">Кабінет</NavLink>
      </div>
    </header>
  );
}

export default Header;
