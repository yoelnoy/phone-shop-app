import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export const axiosInstance = axios.create({
  baseURL: "https://prueba-tecnica-api-tienda-moviles.onrender.com",
  headers: {
    "x-api-key": apiKey,
  },
});
