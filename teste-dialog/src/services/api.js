import axios from "axios";

export const api = axios.create({
  baseURL: "https://spotify-graphql-server.herokuapp.com"
});

export default api;
