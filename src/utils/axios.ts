import axios from 'axios';

// API Base URL - Update this to match your server URL
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add custom logic here before the request is sent
    // Since there's no authentication, we'll just return the config
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Return the response data directly
    return response;
  },
  (error) => {
    // Handle errors globally
    if (error.response) {
      // Server responded with error status
      const errorMessage = error.response.data?.message || error.response.statusText || 'An error occurred';
      console.error('API Error:', errorMessage);
      return Promise.reject(new Error(errorMessage));
    } else if (error.request) {
      // Request was made but no response received
      console.error('Network Error:', error.message);
      return Promise.reject(new Error('Network error. Please check your connection.'));
    } else {
      // Something else happened
      console.error('Error:', error.message);
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
