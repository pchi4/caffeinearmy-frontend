import axios from 'axios';
import { getToken } from '../services/auth';

const api = axios.create({
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  baseURL: 'http://localhost:3001'
});

api.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
