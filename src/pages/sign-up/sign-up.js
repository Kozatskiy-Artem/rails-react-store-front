import React, { useState } from "react";
import api from '../../api';
import CustomInput from "../../components/customInput/customInput";
import "./sign-up.css";
import { useNavigate  } from "react-router-dom";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate ();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.log("Пароли не совпадают");
      return;
    }
    try {
      await api.post("/users/tokens/sign_up", {
        email,
        password,
        confirmPassword,
      });
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="authForm">
      <p className="authForm__text">Зареєструватись</p>
      <form className="content" onSubmit={handleSubmit}>
        <CustomInput
          label={"E-mail"}
          placeholder={"email@gmail.com"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          type="password"
          label={"Пароль"}
          placeholder={"Пароль"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CustomInput
          type="password"
          label={"Повторіть пароль"}
          placeholder={"Повторіть пароль"}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button className="button" type="submit">
          Зареєструватись
        </button>
      </form>
    </div>
  );
}

export default SignUp;
