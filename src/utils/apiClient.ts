import axios from 'axios';
import Cookies from 'js-cookie';
import { API_BASE_URL } from './config';
import toast from 'react-hot-toast';
import type { BaseResponse } from '@/_types/_bsResponse';
import type { AxiosResponse } from 'axios';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: () => true,
});

apiClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => {
    const data = response.data;

    if (data.statusCode === 401) {
      Cookies.remove('accessToken');
      window.location.href = '/login';
    }
    
    return response;
  },

  (error) => {
     return Promise.reject(error);
  },
);
