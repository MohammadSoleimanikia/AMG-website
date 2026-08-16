import axios from 'axios';
import Cookies from 'js-cookie';
import { API_BASE_URL } from './config';
import toast from 'react-hot-toast';

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
    const status = response.status;

    
    // HTTP errors

    if (status < 200 || status >= 300) {
      if (status === 401) {
        Cookies.remove('accessToken');

      }

      if (status === 402) {
        toast.error(
          data?.message || 'شما به این بخش دسترسی ندارید',
        );
      }

      if (status === 403) {
        toast.error(
          data?.message || 'شما اجازه دسترسی ندارید',
        );
      }

      if (status === 404) {
        toast.error(
          data?.message || 'مورد درخواست پیدا نشد',
        );
      }

      if (status === 405) {
        toast.error(
          data?.message || 'خطای فرم',
        );
      }

      if (status === 422) {
        toast.error(
          data?.message || 'مشکلی پیش آمده است',
        );
      }

      if (status >= 500) {
        toast.error(
          data?.message || 'خطایی در سمت سرور رخ داده است',
        );
      }

      return Promise.reject({
        ...response,
        data: null,
        statusCode: status, 
        success: false,
        message: data?.message,
      });
    }

    // backend errors

    if (data?.success === false) {
      return Promise.reject({
        ...response,
        data,
        statusCode: data?.statusCode || status,
        success: false,
        message: data?.message,
      });
    }

    // Success

    return {
      ...response,
      data,
      statusCode: data?.statusCode || status,
      success: true,
      message: data?.message,
    };
  },

  // other errors 
  (error) => {
    const res = error.response?.data;

    if (error.response?.status === 401) {
      Cookies.remove('accessToken');
    }

    return Promise.reject({
      ...error,
      statusCode: error.response?.status,
      success: false,
      data: null,
      message:
        res?.message ||
        error.message ||
        'ارتباط با سرور برقرار نشد.',
    });
  },
);
