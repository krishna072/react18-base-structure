import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
//   timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  (config) => {
    // config.headers.Authorization = `Bearer ${yourToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      // Server responded with a status other than 200 range
      console.log('Error response:', error.response);
    } else if (error.request) {
      // Request was made but no response received
      console.log('Error request:', error.request);
    } else {
      // Something else happened
      console.log('Error message:', error.message);
    }
    return Promise.reject(error);
  }
);

export const apiRequest = async (method, url, data = null, params = {}) => {
  try {
    const response = await apiClient({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
