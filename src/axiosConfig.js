// src/axiosConfig.js
import axios from 'axios';

// Create an instance of axios
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Add a request interceptor to include the token in the headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
