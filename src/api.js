import axios from "axios";
const api = axios.create({
  baseURL: "https://storynest-backend-i8jk.onrender.com", 
  withCredentials: true,
   headers: { "Content-Type": "application/json" },
});
export default api;
