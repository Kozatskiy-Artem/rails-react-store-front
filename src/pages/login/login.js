import React from "react";
import CustomInput from "../../components/customInput/customInput";
import "./login.css";

function Login() {
  return (
    <div className="authForm">
      <p className="authForm__text">Увійти</p>
      <form className="content">
        <CustomInput label={"E-mail"} placeholder={"email@gmail.com"} />
        <CustomInput type="password" label={"Пароль"} placeholder={"Пароль"} />
        <button className="button" type="submit">
          Увійти
        </button>
      </form>
    </div>
  );
}

export default Login;
