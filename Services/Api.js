import axios from "axios";

const headers = {
  "Content-Type": "application/json"
};

const API = axios.create({
  baseURL: process.env.API_URL,
  headers
});

API.interceptors.request.use(async config => {
  return config;
});

export default API;
