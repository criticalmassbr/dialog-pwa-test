import axios from 'axios';

const api = axios.create({
  baseURL: 'https://',
});

export default api;
