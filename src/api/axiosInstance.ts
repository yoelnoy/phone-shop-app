import axios from "axios";

const baseUrl = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "x-api-key": apiKey,
  },
});
