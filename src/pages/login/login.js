import React, {useState} from "react";
import CustomInput from "../../components/customInput/customInput";
import "./login.css";
import api from '../../api';
import { useNavigate  } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate ();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await api.post("/users/tokens/sign_in", {
        email,
        password,
      });
      if (response) {
        localStorage.setItem("accessToken", response.data.token);
        localStorage.setItem("refreshToken", response.data.refresh_token)
        localStorage.setItem("role", response.data.role)
      }
      navigate("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className="authForm">
      <h2>Увійти</h2>
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
        <button className="button" type="submit">
          Увійти
        </button>
      </form>
    </div>
  );
}

export default Login;
