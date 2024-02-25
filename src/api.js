import axios from "axios";

const api = axios.create({
  baseURL: "http://51.20.37.123:3000/api/v1",
});

export default api;
