import axios from "axios";

const instance = axios.create({
  baseURL: "https://munshi-wholesale-server.vercel.app/api/v1",
  // baseURL: "https://localhost:5000/api/v1",
  withCredentials: true,
});

const UseAxios = () => {
  return instance;
};

export default UseAxios;
