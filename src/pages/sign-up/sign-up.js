import React from "react";
import CustomInput from "../../components/customInput/customInput";
import "./sign-up.css";

function SignUp() {
  return (
    <div className="authForm">
      <p className="authForm__text">Зареєструватись</p>
      <form className="content">
        <CustomInput label={"E-mail"} placeholder={"email@gmail.com"} />
        <CustomInput type="password" label={"Пароль"} placeholder={"Пароль"} />
        <CustomInput
          type="password"
          label={"Повторіть пароль"}
          placeholder={"Повторіть пароль"}
        />

        <button className="button" type="submit">
          Зареєструватись
        </button>
      </form>
    </div>
  );
}

export default SignUp;
