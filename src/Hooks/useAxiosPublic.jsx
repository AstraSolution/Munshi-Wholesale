import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://munshi-wholesale-server.vercel.app/api/v1",
  // baseURL: "http://localhost:5000/api/v1",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
