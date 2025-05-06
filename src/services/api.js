import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  // attach auth token if needed
  //config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API error:', error);
    // handle errors globally
    if (error?.response?.status === 401) {
      // redirect to login or show a message
      console.error('Unauthorized access - redirecting to login');
    }
    return Promise.reject(error);
  },
);

export default api;
