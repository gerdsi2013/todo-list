import axios from "axios";

// const Url = import.meta.env.VITE_APP_URL;
const Url = " https://64added0b470006a5ec675a2.mockapi.io/";

export const Api = axios.create({
  baseURL: Url,
  headers: {
    "Content-Type": "application/json",
  },
});
